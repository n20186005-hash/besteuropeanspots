import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '什科茨扬溶洞・Škocjan Caves・斯洛文尼亚・迪瓦查 | 最佳欧洲景点',
  description: '探索什科茨扬溶洞，这座世界自然遗产以宏伟的地下峡谷、奇特的钟乳石景观和奔腾的地下河流闻名，是喀斯特地貌的典型代表。',
}

export default function SkocjanCavesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '什科茨扬溶洞', href: '/attractions/skocjan-caves' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">什科茨扬溶洞・Škocjan Caves・斯洛文尼亚・迪瓦查</h1>
          <p className="text-lg text-gray-600 mb-6">
            什科茨扬溶洞是世界上最深、最大的地下峡谷之一，1986年被联合国教科文组织列为世界自然遗产。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              什科茨扬溶洞是世界上最深、最大的地下峡谷之一，1986年被联合国教科文组织列为世界自然遗产，也是喀斯特现象的重要研究基地。溶洞群由多个相连的溶洞组成，核心景观为地下峡谷、钟乳石、石笋及穿洞而过的雷卡河，部分洞深超200米，瀑布最大落差达163米，洞内景观奇特、气势恢宏，既有自然地质的鬼斧神工，又承载着悠久的地质历史，是自然与科学、美学的完美融合。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="什科茨扬溶洞" />
                <InfoRow label="英文名称" value="Škocjan Caves" />
                <InfoRow label="全称" value="Škocjan Caves Regional Park" />
                <InfoRow label="国家" value="斯洛文尼亚（Slovenia）" />
                <InfoRow label="城市" value="迪瓦查（Divaca）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="喀斯特地貌核心区域" />
                <InfoRow label="世界遗产" value="1986年列入" />
                <InfoRow label="洞深规模" value="部分洞深超200米" />
                <InfoRow label="瀑布落差" value="最大163米" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">成人门票：</span>约18欧元/人</p>
                <p><span className="font-medium">学生票：</span>9欧元/人（凭有效证件）</p>
                <p><span className="font-medium">儿童政策：</span>6岁以下儿童免费，6-15岁约10欧元/人</p>
                <p><span className="font-medium">家庭套票：</span>2大2小约45欧元</p>
                <p><span className="font-medium">专业导览：</span>额外收费约10欧元/人（含英文讲解）</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">开放时间</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">4-5月：</span>9:00-17:00（16:00停止入园）</p>
                <p><span className="font-medium">6-8月：</span>8:30-18:00（17:00停止入园）</p>
                <p><span className="font-medium">9月：</span>9:00-17:00（16:00停止入园）</p>
                <p><span className="font-medium">10月：</span>9:30-16:00（15:00停止入园）</p>
                <p><span className="font-medium">11月-次年3月：</span>10:00-15:00（14:00停止入园）</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">卢布尔雅那机场：</span>→溶洞（1.5小时车程）</p>
                <p><span className="font-medium">公共交通：</span>卢布尔雅那→迪瓦查（2小时大巴，15欧元/人）</p>
                <p><span className="font-medium">克罗地亚里耶卡：</span>→迪瓦查（1小时车程）</p>
                <p><span className="font-medium">市内交通：</span>迪瓦查→溶洞（出租车10分钟，约8欧元）</p>
                <p><span className="font-medium">停车场：</span>溶洞周边专用停车场，收费约5欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              什科茨扬溶洞的形成历经数百万年的地质演变，是喀斯特地貌的典型代表，其历史可追溯至远古时期的地质运动，而人类对它的探索与记载，已有近500年的历史。作为世界上最古老的溶洞旅游胜地之一，什科茨扬溶洞不仅是自然奇观，更是人类研究喀斯特地貌、地质演变的重要样本，承载着深厚的自然科学历史。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              数百万年前，斯洛文尼亚西南部的喀斯特高原地区，由于地壳运动、地下水的侵蚀与溶蚀作用，石灰岩地层逐渐被冲刷、溶解，形成了纵横交错的地下溶洞与地下峡谷，什科茨扬溶洞便是这一地质过程的完美产物。溶洞内的钟乳石、石笋、石幔等景观，是地下水携带的碳酸钙长期沉积形成的，每一寸景观都历经数十万年的积累，有的如利剑直指洞顶，有的如仙女翩翩起舞，有的如猛兽盘踞，形态各异、栩栩如生。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              人类对什科茨扬溶洞的记载最早可追溯至1599年，当时当地居民偶然发现了这一地下奇观，随后逐渐被周边民众知晓。1819年，什科茨扬溶洞正式对游客开放，成为欧洲最早开放的溶洞旅游景点之一，吸引了众多地质学家、探险家与游客前来探索。自19世纪以来，什科茨扬溶洞一直是喀斯特现象的重要研究基地，无数地质学家在这里开展研究，揭示了喀斯特地貌的形成规律与地下水的运动特点，为全球喀斯特地貌研究提供了重要的参考依据。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              20世纪以来，当地政府开始对什科茨扬溶洞进行系统性的保护与修缮，严格控制游客数量，避免人为活动对溶洞景观造成破坏，同时完善周边旅游配套设施，提升游客体验。1986年，什科茨扬溶洞因其独特的地质价值、自然景观与科学研究价值，被联合国教科文组织列为世界自然遗产，成为全球公认的自然瑰宝。如今，什科茨扬溶洞不仅是斯洛文尼亚的旅游名片，更是全球地质科普、自然教育的重要基地，每年吸引着数百万游客前来参观、探索，感受自然的鬼斧神工。
            </p>
            <p className="text-gray-700 leading-relaxed">
              此外，什科茨扬溶洞周边的喀斯特地区，还留存着古老的村落与传统的生活方式，当地居民世代与溶洞、喀斯特地貌相伴，形成了独特的地域文化。溶洞内还曾发现过远古人类的遗迹与动植物化石，进一步印证了这里悠久的历史，也让什科茨扬溶洞成为兼具自然景观与人文历史的综合性旅游胜地。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程为步行路线，难度适中，建议安排2小时左右</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：什科茨扬溶洞主入口</h5>
                    <p>设有游客中心，可领取导览手册、寄存行李，周边有休息区与纪念品商店</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：地质科普展厅（游客中心内侧）</h5>
                    <p>免费开放，展示溶洞地质成因、形成过程、动植物资源及研究成果，参观约15分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：溶洞入口通道</h5>
                    <p>沿平缓石阶进入溶洞，通道两侧有柔和灯光，照亮岩壁纹理，可初步感受溶洞静谧氛围</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：寂静洞</h5>
                    <p>核心景观之一，洞内光线柔和，岩壁洁白，遍布形态各异钟乳石与石笋，有的相互连接形成石柱</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：低语洞</h5>
                    <p>紧邻寂静洞，洞内有轻微水流声，岩壁上钟乳石呈现不同颜色，因光线折射而显得格外绚丽</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：地下峡谷观景台</h5>
                    <p>观赏地下峡谷最佳位置，峡谷深达百余米，两侧岩壁陡峭，雷卡河穿谷而过，景象蔚为壮观</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：地下瀑布</h5>
                    <p>瀑布落差达163米，水流从洞顶倾泻而下，撞击岩石形成壮观水雾，水声轰鸣，是溶洞内最震撼景观</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第七站：溶洞出口通道</h5>
                    <p>沿石阶上行，沿途可再次观赏溶洞奇特景观，通道两侧设有休息座椅，出口处有小型花园</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：游客中心</h5>
                    <p>从出口步行3分钟返回游客中心，可领取纪念证书、购买纪念品，在休息区休息补充能量</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 溶洞内常年气温保持在12-15℃，无论季节如何，都需携带薄外套</li>
                  <li>• 洞内地面潮湿、部分路段较滑，建议穿舒适的防滑步行鞋</li>
                  <li>• 洞内光线较暗，部分区域需借助灯光观赏，请勿随意触摸钟乳石、石笋等景观</li>
                  <li>• 禁止大声喧哗，保持洞内静谧，尊重其他游客</li>
                  <li>• 旺季游客较多，建议错峰前往，避免拥挤</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">地下峡谷观景台</h4>
                  <p className="text-gray-700 text-sm">拍摄地下峡谷全景核心机位，可完整拍摄地下峡谷全貌，陡峭岩壁、蜿蜒雷卡河与横跨峡谷古桥相互映衬。最佳时间：上午10:00-11:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">地下瀑布景观区</h4>
                  <p className="text-gray-700 text-sm">拍摄震撼水景最佳机位，可近距离拍摄地下瀑布全貌，水流倾泻而下瞬间、飞溅水雾与昏暗溶洞背景形成强烈对比。最佳时间：午后14:00-15:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">寂静洞钟乳石群</h4>
                  <p className="text-gray-700 text-sm">拍摄钟乳石细节核心机位，寂静洞内钟乳石形态各异、洁白晶莹，灯光柔和照射凸显细腻纹理与独特造型。最佳时间：上午9:30-10:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">溶洞入口通道</h4>
                  <p className="text-gray-700 text-sm">拍摄氛围感大片绝佳机位，狭窄通道、斑驳岩壁、柔和灯光，能营造出静谧、神秘氛围。最佳时间：清晨刚开园时</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">低语洞彩色钟乳石</h4>
                  <p className="text-gray-700 text-sm">拍摄绚丽景观核心机位，低语洞内钟乳石因含有不同矿物质，呈现粉、黄、白等多种颜色，灯光照射下色彩斑斓、晶莹剔透。最佳时间：上午11:00-12:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">溶洞出口花园</h4>
                  <p className="text-gray-700 text-sm">拍摄溶洞与自然衔接绝佳机位，从出口处拍摄溶洞入口，搭配周边绿植与喀斯特地貌，画面清新自然。最佳时间：傍晚16:00-17:00</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 溶洞内光线较暗，建议携带手机三脚架，避免拍摄画面模糊</li>
                  <li>• 拍摄钟乳石、瀑布时，可关闭闪光灯，使用自然光与洞内灯光结合，避免强光破坏景观自然质感</li>
                  <li>• 建议穿着纯色、简约风格衣物，如白色、米白色、黑色，避免过于花哨，与溶洞景观形成呼应</li>
                  <li>• 拍摄地下峡谷时，可使用广角镜头，展现其宏伟气势，拍摄细节时可使用长焦镜头，突出钟乳石纹理与质感</li>
                  <li>• 禁止拍摄溶洞内的敏感区域，遵守当地规定，保护自然景观</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">步行可达景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">什科茨扬溶洞regional park</span>
                      <p className="text-sm text-gray-600">距离溶洞入口约1公里，步行15分钟。遍布喀斯特地貌景观、茂密森林与清澈溪流，免费开放</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">短途出行景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">迪瓦查老城区</span>
                      <p className="text-sm text-gray-600">距离溶洞约5公里，出租车10分钟。保留斯洛文尼亚传统建筑风貌，石板街巷蜿蜒曲折</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">雷卡河峡谷</span>
                      <p className="text-sm text-gray-600">距离溶洞约8公里，自驾15分钟。雷卡河穿流形成的自然峡谷，两侧岩壁陡峭，植被茂密</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">皮兰古城</span>
                      <p className="text-sm text-gray-600">距离溶洞约30公里，大巴40分钟，6欧元/人。斯洛文尼亚著名海滨古城，保留威尼斯时期建筑风貌</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">喀斯特高原徒步路线</span>
                      <p className="text-sm text-gray-600">距离溶洞约3公里，全程约5公里，难度适中。沿途可欣赏喀斯特洼地、溶洞出入口、天然石拱门等景观</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿推荐">
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">住宿位置选择</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">溶洞附近</h5>
                    <p>距离核心景点最近，步行或打车几分钟即可抵达，周边多为乡村民宿，氛围宁静，可感受喀斯特乡村静谧之美</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">迪瓦查老城区</h5>
                    <p>住宿性价比高，距离溶洞约5公里，出行便利，周边配套完善，餐厅、商铺齐全，可感受当地烟火气</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">皮兰古城</h5>
                    <p>住宿风景优美，濒临大海，适合喜欢海滨风光的游客，距离溶洞约30公里，可搭配海滨游览安排住宿</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>溶洞附近与迪瓦查老城区有很多小众民宿，多由当地传统民居改造，装修融合喀斯特元素与斯洛文尼亚传统风格，30-70欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">自助公寓</h5>
                    <p>设施齐全，适合家庭或多人出行，25-60欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品乡村酒店</h5>
                    <p>溶洞周边有多家精品乡村酒店，环境优美，配套完善，部分设有观景露台，可欣赏喀斯特风光，70-120欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>迪瓦查老城区有多家性价比高的酒店，设施标准化，干净整洁，20-35欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 什科茨扬溶洞旅游旺季为5-9月，尤其是7-8月，游客较多，建议提前1-2个月预订</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（5-7欧元/天）</li>
                  <li>• 部分民宿位于乡村，无电梯，携带大件行李的游客可选择有行李搬运服务的住宿</li>
                  <li>• 春秋季（4-5月、9-10月）气候最宜人，游客较少，住宿价格适中，是最佳时节</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="8. 实用贴士">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">最佳游览时间</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 4-5月、9-10月：气候宜人，游客较少，住宿价格适中</li>
                    <li>• 5-9月：旅游旺季，活动丰富但游客较多</li>
                    <li>• 11-次年2月：旅游淡季，游客稀少，部分景点关闭</li>
                    <li>• 上午10:00-11:30：游客较少，光线柔和，便于拍摄</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 溶洞内常年气温保持在12-15℃，无论季节如何，都需携带薄外套</li>
                    <li>• 洞内地面潮湿、部分路段较滑，建议穿舒适的防滑步行鞋</li>
                    <li>• 请勿随意触摸钟乳石、石笋等景观，避免造成损坏</li>
                    <li>• 禁止大声喧哗，保持洞内静谧，尊重其他游客</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 站在地下峡谷观景台，观赏深达百余米的壮观峡谷与奔腾的雷卡河</li>
                    <li>• 近距离欣赏落差163米的地下瀑布，感受水流轰鸣的震撼</li>
                    <li>• 探索寂静洞与低语洞，观赏形态各异的钟乳石与石笋</li>
                    <li>• 在地质科普展厅了解喀斯特地貌的形成规律与地质演变历史</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地货币：欧元，部分地方支持斯洛文尼亚货币（1欧元≈239斯洛文尼亚托拉尔）</li>
                    <li>• 语言：斯洛文尼亚语，但旅游区英语基本通行</li>
                    <li>• 电压：230V，插头为Type F型</li>
                    <li>• 紧急电话：112（欧洲统一紧急电话）</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}