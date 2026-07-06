# Debug Session: edge-bundle-bloat
- **Status**: [OPEN]
- **Issue**: Cloudflare Pages 部署时 `/attractions/[slug]/page` 仍然报 `Exceeds maximum edge function size: 4.97 MB / 4 MB`，说明该路由链条里依然存在会被打进 Edge bundle 的超大静态依赖。
- **Debug Server**: pending
- **Log File**: .dbg/trae-debug-log-edge-bundle-bloat.ndjson

## Reproduction Steps
1. 运行 `npm run build`
2. 检查 `/attractions/[slug]` 相关产物与依赖树
3. 找出直接或间接把大 JSON / 重型模块打进 Edge function 的“漏网之鱼”

## Hypotheses & Verification
| ID | Hypothesis | Likelihood | Effort | Evidence |
|----|------------|------------|--------|----------|
| A | `/attractions/[slug]` 仍然通过 `@/lib/attractions` 间接静态导入了 `attractions.json` | High | Low | Pending |
| B | `/attractions/[slug]` 依赖树中仍有其他 >100KB 的本地 JSON 被静态导入 | High | Medium | Pending |
| C | 某个共享组件/布局通过二级依赖重新把大数据模块带回来了 | Medium | Medium | Pending |
| D | 某个第三方包或其附带数据文件异常庞大，进入了 `/attractions/[slug]` 的 Edge bundle | Medium | Medium | Pending |

## Log Evidence
- Evidence 1: `.next/server/app/attractions/[slug]/page.js` only 33,310 bytes, so the oversized Edge function is not caused by the route file alone.
- Evidence 2: `.next/server/edge-chunks/123.js` is 14,486,215 bytes, which matches the failure profile.
- Evidence 3: `.next/server/edge-chunks/123.js` contains a giant `JSON.parse('[...]')` blob embedded in module `9165`, traced back to `src/app/layout.tsx`.
- Evidence 4: `src/app/layout.tsx` imported `getRegions` and `getStats` from `@/lib/attractions`, which statically pulled the full attractions dataset into the root layout shared chunk.
- Evidence 5: After replacing the root-layout dependency with `src/lib/site-summary.ts`, `npm run build` succeeded and `.next/server/edge-chunks/123.js` no longer exists.
- Evidence 6: After the fix, the largest remaining edge chunk is `.next/server/edge-chunks/891.js` at 991,538 bytes, well below Cloudflare's 4 MB limit.

## Verification Conclusion
- Hypothesis A: Confirmed
- Hypothesis B: Inconclusive
- Hypothesis C: Confirmed
- Hypothesis D: Rejected so far
