import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施塔德老城 Stade Old Town｜漫步汉萨同盟的时光回廊，感受北德水城的童话魅力 - 最佳欧洲景点',
  description: '一脚踏进施塔德老城，时间仿佛瞬间慢了下来。这里没有大城市的喧嚣，只有彩色的桁架木屋歪歪扭扭地挤在鹅卵石小巷两旁，像极了从童话书里直接搬出来的场景。老城被施塔德水网温柔环绕，一座座小桥连接着街区，河边总停着几艘小船，安静得能听见水流声。我最爱在午后的阳光里，随便找家临河的咖啡馆坐下，看着尖顶的圣科斯马...',
}

export default function StadeOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '施塔德老城', href: '/attractions/stade-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">施塔德老城</h1>
          <p className="text-xl text-gray-600 mb-4">Stade Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">德国</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">施塔德</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">一脚踏进施塔德老城，时间仿佛瞬间慢了下来。这里没有大城市的喧嚣，只有彩色的桁架木屋歪歪扭扭地挤在鹅卵石小巷两旁，像极了从童话书里直接搬出来的场景。老城被施塔德水网温柔环绕，一座座小桥连接着街区，河边总停着几艘小船，安静得能听见水流声。我最爱在午后的阳光里，随便找家临河的咖啡馆坐下，看着尖顶的圣科斯马伊教堂倒映在水面，那份宁静和治愈感，是任何攻略都形容不出来的。空气中飘着咖啡香和刚出炉的“法兰克福蛋糕”的甜味，每一步都是风景，每一个转角都有惊喜。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城露天区域全年全天可自由漫步。但需注意，内部景点如施塔德博物馆、老海关大楼等，冬季（11月-3月）开放时间可能缩短，周一普遍闭馆。持有“施塔德卡”可享受多个景点的门票折扣。部分狭窄小巷为步行区，自驾游客需将车停放在老城周边的停车场。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">施塔德的故事，可以说是一部浓缩的北德汉萨同盟兴衰史。它的黄金时代大概要从13世纪算起，那时候它作为重要的汉萨同盟港口城市，靠着易北河支流的便利，把粮食、啤酒和布料生意做得风生水起。你现在看到的那些华丽的山墙和仓库，很多都是那个富裕年代的遗产。不过命运也挺爱开玩笑，17世纪时瑞典人来了，把这里变成了瑞典王国在德国的重要据点，留下了不少巴洛克风格的印记，比如市政厅那边就能看到。后来的大火和战争虽然让老城伤痕累累，但德国人那种“修旧如旧”的执着真的让人佩服。他们像拼图一样，一砖一瓦地把这些中世纪木筋屋复原，不是做成死气沉沉的博物馆，而是让咖啡馆、画廊和小店住进去，让历史真正活在了当下。走在街上，你能同时触摸到汉萨的厚重、瑞典的优雅和现代的生活气，这种感觉特别奇妙。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从老城西侧的地标——圣科斯马伊教堂开始，顺时针环绕老城核心区游览，重点感受河畔风光、集市广场与小巷魅力。全程步行，悠闲游览大约需要2-3小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从宏伟的圣科斯马伊教堂钟楼开始，仰望其红砖建筑。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  漫步到老市政厅和历史悠久的集市广场。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  穿过“糖果屋”等彩绘木筋房小巷，感受童话氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  沿着施塔德水网漫步，欣赏河边仓库与倒影。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  参观老海关大楼，了解港口历史。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  在鱼市附近的咖啡馆结束行程，享受河景。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城小巷如迷宫，但不用担心迷路，随心探索更有趣。建议穿舒适的平底鞋，鹅卵石路面对高跟鞋不太友好。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  ** Fischmarkt 鱼市桥头**：清晨或傍晚，站在小桥上拍摄河道与两岸彩色木屋的倒影，画面宁静富有水城韵味。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  ** 圣科斯马伊教堂侧面小巷**：下午阳光斜射时，以教堂巨大的红砖墙体为背景，拍摄蜿蜒的鹅卵石街道和行人，构图极具纵深感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  ** “糖果屋” (Kunsthaus) 前**：白天任何时候，近距离拍摄这栋外墙绘有精美童话图案的著名木筋屋，色彩鲜艳，充满童趣。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  ** 老海关大楼对岸**：日落时分，从河对岸拍摄老海关大楼及其在水中的完整倒影，古典建筑与自然光线结合。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">拍摄民居时请注意礼貌，避免打扰当地居民生活。雨天后的鹅卵石路面反光，能拍出更生动的照片。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  ** 老城内精品酒店**：入住修复的历史建筑木筋屋酒店，沉浸式体验中世纪氛围，价格中上。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  ** 施塔德水畔民宿**：选择老城河边带小露台的公寓，享受私家的水城 views，适合家庭或情侣。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  ** 火车站附近商务酒店**：性价比之选，交通便利，步行至老城约10分钟，适合预算有限的旅客。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  ** 城郊田园风旅馆**：如果自驾，可选择周边村庄安静舒适的旅馆，体验德国乡村风情。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和圣诞市场期间）老城内住宿非常紧俏，务必提前预订。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">施塔德老城就像一个被时光轻轻吻过的地方，它不张扬，却美得深入人心。在这里，历史不是课本上枯燥的文字，而是你指尖触碰到的木头纹理，是脚下磨光的鹅卵石，是空气中混合着的河水与咖啡的气息。如果你厌倦了标准化的旅行，想找一个能让自己心静下来、慢慢走、细细看的地方，那么施塔德老城绝对不会让你失望。</p>
            </Section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
              </p>
              <p className="text-xs text-gray-500 text-center">
                管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">实用信息</h3>
              <div className="space-y-4">
                <InfoRow icon="🕒" label="开放时间" value="公共区域全天开放；内部各博物馆及历史建筑开放时间不一，通常为周二至周日 10:00-17:00。" />
                <InfoRow icon="🎫" label="门票" value="进入老城区域免费。参观单个博物馆或历史建筑门票约3-6欧元，联票更优惠。" />
                <InfoRow icon="📍" label="地址" value="Altstadt, 21682 Stade, Germany" />
                <InfoRow icon="🚌" label="交通" value="从汉堡机场出发，乘坐S-Bahn（S5线）至汉堡主火车站，换乘区域火车（RE或RB）前往施塔德火车站，全程约1小时。从施塔德火车站步行10分钟即可到达老城中心。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
