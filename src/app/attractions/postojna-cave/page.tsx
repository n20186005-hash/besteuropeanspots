import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '波斯托伊娜溶洞・Postojna Cave・斯洛文尼亚・波斯托伊娜 | 最佳欧洲景点',
  description: '探索波斯托伊娜溶洞，这座欧洲第二大溶洞以独特的地下景观和可乘坐小列车游览的特色闻名，是喀斯特地貌的完美典范。',
}

export default function PostojnaCavePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '波斯托伊娜溶洞', href: '/attractions/postojna-cave' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">波斯托伊娜溶洞・Postojna Cave・斯洛文尼亚・波斯托伊娜</h1>
          <p className="text-lg text-gray-600 mb-6">
            波斯托伊娜溶洞是欧洲第二大溶洞，1818年被正式发现并对外开放，是世界上最奇特的地下溶洞之一。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              波斯托伊娜溶洞是欧洲第二大溶洞，1818年被正式发现并对外开放，是世界上最奇特的地下溶洞之一。溶洞全长27公里，深入地下达200米，由皮夫卡河地下暗流历经300万年溶蚀石灰岩地层形成，洞内套洞、纵横交错，钟乳石与石笋千姿百态，皮夫卡河时隐时现，兼具自然地质的鬼斧神工与人文探索的厚重底蕴，是喀斯特地貌的完美典范和可持续旅游的标杆。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="波斯托伊娜溶洞" />
                <InfoRow label="英文名称" value="Postojna Cave" />
                <InfoRow label="全称" value="Postojna Cave Park" />
                <InfoRow label="国家" value="斯洛文尼亚（Slovenia）" />
                <InfoRow label="城市" value="波斯托伊娜（Postojna）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="喀斯特高原核心地带" />
                <InfoRow label="溶洞规模" value="全长27公里，深入地下200米" />
                <InfoRow label="形成年代" value="历经300万年地质演变" />
                <InfoRow label="开放历史" value="1818年正式对外开放" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">成人门票：</span>约25欧元/人</p>
                <p><span className="font-medium">学生票：</span>12.5欧元/人（凭有效证件）</p>
                <p><span className="font-medium">儿童政策：</span>6岁以下儿童免费，6-15岁约15欧元/人</p>
                <p><span className="font-medium">家庭套票：</span>2大2小约60欧元</p>
                <p><span className="font-medium">专业导览：</span>额外收费约12欧元/人（含英文讲解）</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">开放时间</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">4-5月：</span>9:00-17:00（16:00停止入园）</p>
                <p><span className="font-medium">6-8月：</span>8:00-18:30（17:30停止入园）</p>
                <p><span className="font-medium">9月：</span>9:00-17:00（16:00停止入园）</p>
                <p><span className="font-medium">10月：</span>9:30-16:30（15:30停止入园）</p>
                <p><span className="font-medium">11月-次年3月：</span>10:00-15:30（14:30停止入园）</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">卢布尔雅那机场：</span>→溶洞（1小时车程）</p>
                <p><span className="font-medium">公共交通：</span>卢布尔雅那→波斯托伊娜（1.5小时大巴，10欧元/人）</p>
                <p><span className="font-medium">克罗地亚里耶卡：</span>→波斯托伊娜（1.5小时车程）</p>
                <p><span className="font-medium">市内交通：</span>市区→溶洞（出租车5分钟，约5欧元）</p>
                <p><span className="font-medium">停车场：</span>溶洞周边专用停车场，收费约6欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              波斯托伊娜溶洞的形成历经300万年的地质演变，是喀斯特地貌的典型代表，其地质历史可追溯至远古时期的地壳运动与地下水溶蚀作用，而人类对它的探索与记载，已有近800年的历史，兼具自然奇观与人文底蕴，是全球洞穴旅游可持续发展的典范。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              300万年前，斯洛文尼亚西南部的喀斯特高原地区，由于地壳运动导致石灰岩地层抬升，加之皮夫卡河地下暗流长期的侵蚀与溶蚀作用，石灰岩逐渐被冲刷、溶解，形成了纵横交错的地下溶洞与地下通道，波斯托伊娜溶洞便是这一地质过程的完美产物。溶洞内的钟乳石、石笋、石幔、石帘等景观，是地下水携带的碳酸钙长期沉积形成的，每一寸景观都历经数十万年的积累，形态各异、栩栩如生，有的如利剑直指洞顶，有的如仙女翩翩起舞，有的如珊瑚晶莹剔透，构成了地下世界的奇幻画卷。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              人类对波斯托伊娜溶洞的记载最早可追溯至13世纪，当时当地居民偶然发现了溶洞近端的大厅，通道岩壁上留存的古老签名，最早可追溯至这一时期。但真正让溶洞被世界知晓的，是1818年的重大发现——当年，溶洞工作者卢卡·契奇在为迎接奥地利国王来访做准备时，攀爬上陡立的石墙，意外发现了溶洞深处的"崭新世界"，他惊呼"这是一个崭新的世界，这就是天堂！"，随后这一地下奇观正式走进公众视野。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              1816年，奥地利国王及王后曾到访波斯托伊娜溶洞，成为溶洞接待的第一批皇室贵客；1818年，溶洞正式对游客开放，成为欧洲最早开放的溶洞旅游景点之一，此后近200年间，已有近4000万人慕名前往参观。自19世纪以来，波斯托伊娜溶洞一直是喀斯特现象的重要研究基地，无数地质学家在这里开展研究，揭示了喀斯特地貌的形成规律与地下水的运动特点，为全球喀斯特地貌研究提供了重要参考。
            </p>
            <p className="text-gray-700 leading-relaxed">
              20世纪以来，当地政府开始对波斯托伊娜溶洞进行系统性的保护与修缮，坚持"保护优先、合理开发"的原则，严格控制游客数量，避免人为活动对溶洞景观造成破坏，同时完善周边旅游配套设施，提升游客体验。如今，波斯托伊娜溶洞已成为世界范围内洞穴旅游的典范，曾获得世界旅游记者及作家联合会授予的金苹果奖，嘉奖其对自然及文化遗产的出色保护，以及在旅游开发中有机融入可持续发展原则。如今，它不仅是斯洛文尼亚的旅游名片，更是全球地质科普、自然教育的重要基地，每年吸引着数百万游客前来参观、探索，感受自然的鬼斧神工与人文历史的厚重。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典游览路线</h4>
                <p className="text-gray-700 mb-4">全程为"小列车+步行"相结合，难度适中，建议安排2-2.5小时</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：波斯托伊娜溶洞主入口</h5>
                    <p>设有游客中心，可领取导览手册、寄存行李，周边有休息区、餐厅与纪念品商店</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：地质科普展厅（游客中心内侧）</h5>
                    <p>免费开放，通过图文、模型、实物展示溶洞地质成因、形成过程、动植物资源，参观约15分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：小列车乘坐点</h5>
                    <p>乘坐洞内小列车进入溶洞深处，车程约3.7公里，沿途观赏奇特景观，全程有导览讲解，约15分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：音乐厅洞</h5>
                    <p>小列车第一站停靠，溶洞内最宏伟洞厅之一，可容纳数千人，洞顶悬挂巨大钟乳石，参观约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：漂亮洞</h5>
                    <p>紧邻音乐厅洞，洞内钟乳石与石笋色彩绚丽，因含不同矿物质呈现白、黄、粉等多种颜色，参观约15分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：意大利面条厅</h5>
                    <p>因洞内钟乳石形态细长缠绕，形似意大利面条而得名，是溶洞内最具趣味性景观之一，参观约10分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：皮夫卡河地下河段</h5>
                    <p>沿步行栈道前行，可看到皮夫卡河地下河段，河水清澈见底，与周边钟乳石景观相互映衬，参观约15分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第七站：小列车返程点</h5>
                    <p>步行游览结束后，乘坐小列车返回溶洞入口区域，车程约15分钟，沿途可再次欣赏洞内景观</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：游客中心</h5>
                    <p>从列车停靠点步行5分钟返回游客中心，可购买纪念品、在餐厅补充能量，也可在休息区休息</p>
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
                  <li>• 小列车有固定发车时间，可提前查看发车时刻表，避免等待过久</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">音乐厅洞全景机位</h4>
                  <p className="text-gray-700 text-sm">拍摄溶洞宏伟气势核心机位，可完整拍摄洞厅全貌，巨大钟乳石悬挂于洞顶。最佳时间：上午10:00-11:30，建议使用广角镜头</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">漂亮洞彩色钟乳石机位</h4>
                  <p className="text-gray-700 text-sm">拍摄绚丽景观核心机位，钟乳石因含不同矿物质呈现白、黄、粉等多种颜色。最佳时间：上午11:00-12:00，关闭闪光灯避免破坏质感</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">意大利面条厅特色机位</h4>
                  <p className="text-gray-700 text-sm">拍摄趣味性照片最佳机位，细长缠绕钟乳石形似意大利面条，形态独特极具趣味性。最佳时间：中午12:00-13:00，建议俯拍或平拍角度</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">地下河段水景机位</h4>
                  <p className="text-gray-700 text-sm">拍摄水景与溶洞结合核心机位，皮夫卡河地下河段清澈见底，与周边钟乳石景观相互映衬。最佳时间：午后14:00-15:00，可使用慢门模式</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">小列车沿途机位</h4>
                  <p className="text-gray-700 text-sm">拍摄溶洞动态景观独特机位，可拍摄沿途洞厅、钟乳石与隧道，画面具有纵深感。最佳时间：清晨刚开园时，使用手机防抖功能</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">溶洞入口通道机位</h4>
                  <p className="text-gray-700 text-sm">拍摄氛围感大片绝佳机位，狭窄通道、斑驳岩壁、柔和灯光，营造静谧神秘氛围。最佳时间：清晨刚开园或傍晚闭园前</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 溶洞内光线较暗，建议携带手机三脚架，避免拍摄画面模糊</li>
                  <li>• 拍摄钟乳石、水景时，可关闭闪光灯，使用自然光与洞内灯光结合，避免强光破坏景观自然质感</li>
                  <li>• 建议穿着纯色、简约风格衣物，如白色、米白色、黑色，避免过于花哨，与溶洞景观形成呼应</li>
                  <li>• 拍摄洞厅全景时，可使用广角镜头，拍摄细节时可使用长焦镜头，突出钟乳石纹理与质感</li>
                  <li>• 小列车行驶过程中请勿随意站立或伸出身体，确保拍摄安全</li>
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
                      <span className="font-medium">波斯托伊娜溶洞公园</span>
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
                      <span className="font-medium">波斯托伊娜老城区</span>
                      <p className="text-sm text-gray-600">距离溶洞约3公里，出租车5分钟。保留斯洛文尼亚传统建筑风貌，石板街巷蜿蜒曲折</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">皮夫卡河峡谷</span>
                      <p className="text-sm text-gray-600">距离溶洞约10公里，自驾15分钟。皮夫卡河穿流形成的自然峡谷，两侧岩壁陡峭，植被茂密</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">卢布尔雅那城堡</span>
                      <p className="text-sm text-gray-600">距离溶洞约60公里，大巴1.5小时，10欧元/人。斯洛文尼亚首都标志性建筑，始建于11世纪</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">喀斯特高原徒步路线</span>
                      <p className="text-sm text-gray-600">距离溶洞约5公里，全程约6公里，难度适中。沿途可欣赏喀斯特洼地、溶洞出入口、天然石拱门等景观</p>
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
                    <p>距离核心景点最近，步行或打车几分钟即可抵达，周边多为乡村民宿和精品乡村酒店，氛围宁静，可感受喀斯特乡村静谧之美</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">波斯托伊娜老城区</h5>
                    <p>住宿性价比高，距离溶洞约3公里，出行便利，周边配套完善，餐厅、商铺、超市齐全，可感受当地烟火气</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>溶洞附近与波斯托伊娜老城区有很多小众民宿，多由当地传统民居改造，装修融合喀斯特元素与斯洛文尼亚传统风格，35-75欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">自助公寓</h5>
                    <p>设施齐全，适合家庭或多人出行，30-65欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品乡村酒店</h5>
                    <p>溶洞周边有多家精品乡村酒店，环境优美，配套完善，部分设有观景露台，可欣赏喀斯特风光，提供早餐服务，75-125欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>波斯托伊娜老城区有多家性价比高的酒店，设施标准化，干净整洁，提供基础住宿服务，25-40欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 波斯托伊娜溶洞旅游旺季为5-9月，尤其是7-8月，游客较多，建议提前1-2个月预订</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（6-8欧元/天）</li>
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
                    <li>• 乘坐洞内小列车，体验独特的地下交通方式</li>
                    <li>• 探索音乐厅洞，感受可容纳数千人的宏伟洞厅</li>
                    <li>• 欣赏漂亮洞彩色钟乳石，观赏白、黄、粉等多种颜色的绚丽景观</li>
                    <li>• 参观意大利面条厅，观赏形似意大利面条的独特钟乳石</li>
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