import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴赛阿波罗神庙・Temple of Apollo Epicurius・希腊・巴赛 | 最佳欧洲景点',
  description: '探索巴赛阿波罗神庙，这座古希腊建筑艺术的杰出代表，以独特的混合柱式和保存完好的建筑遗迹闻名于世。',
}

export default function BassaePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '巴赛阿波罗神庙', href: '/attractions/bassae' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">巴赛阿波罗神庙・Temple of Apollo Epicurius・希腊・巴赛</h1>
          <p className="text-lg text-gray-600 mb-6">
            巴赛阿波罗神庙是古希腊祭祀太阳神阿波罗的重要圣地，始建于公元前420年至公元前400年，由古希腊建筑师伊克蒂诺设计，是古希腊晚期多立克柱式建筑的典范之作。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              巴赛阿波罗神庙是古希腊祭祀太阳神阿波罗的重要圣地，始建于公元前420年至公元前400年，由古希腊建筑师伊克蒂诺设计，是古希腊晚期多立克柱式建筑的典范之作。神庙依山而建，坐北朝南，整体采用石灰石砌筑，融合多立克、爱奥尼和科林斯三种柱式，留存有完整的柱廊、三角楣和铭文遗迹，承载着近2400年的历史，是探寻古希腊宗教信仰、建筑艺术与人文精神的核心景点。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="巴赛阿波罗神庙" />
                <InfoRow label="英文名称" value="Temple of Apollo Epicurius" />
                <InfoRow label="国家" value="希腊（Greece）" />
                <InfoRow label="城市" value="巴赛（Bassae）" />
                <InfoRow label="所属区域" value="伯罗奔尼撒半岛阿卡迪亚州" />
              </div>
              <div className="space-y-4">
                <InfoRow label="海拔高度" value="约1130米" />
                <InfoRow label="门票价格" value="成人15欧元/人，学生半价" />
                <InfoRow label="建议游览" value="1.5-2.5小时" />
                <InfoRow label="世界遗产" value="1986年列入世界文化遗产" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">成人票：</span>15欧元/人，学生、65岁以上老人半价（7.5欧元/人），12岁以下儿童免费</p>
                <p><span className="font-medium">通票说明：</span>门票可通用神庙遗址及周边的考古陈列区，无需单独购票</p>
                <p><span className="font-medium">免费开放日：</span>3月6日、4月18日、5月18日、9月最后一个周末、11月-3月每月第一和第三个周日</p>
                <p><span className="font-medium">优惠政策：</span>线上提前1天购票可享受8%优惠，夏季建议提前线上购票避免排队</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">自驾：</span>雅典→巴赛阿波罗神庙（3小时，高速+山区公路，弯道较多需谨慎驾驶）</p>
                <p><span className="font-medium">公共交通：</span>雅典→特里波利斯市（2.5小时，30欧元）→打车（40分钟，35欧元，需提前预约）</p>
                <p><span className="font-medium">市内交通：</span>巴赛村私人接送车（10分钟，10欧元/人）或步行（山路，建议穿防滑鞋）</p>
                <p><span className="font-medium">停车场：</span>神庙入口外专用停车场，收费约4欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              巴赛阿波罗神庙的历史发展与古希腊的宗教信仰、城邦文化及建筑艺术紧密相连，是古希腊晚期建筑的集大成者，其建造与留存承载着古代希腊人对太阳神阿波罗的敬仰，也见证了古希腊文明的兴衰更迭。神庙的名字中，"Epicurius"意为"庇护者"，体现了阿波罗神在古希腊人心中"守护安康、庇佑城邦"的神圣地位。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前5世纪，古希腊处于鼎盛时期，巴赛地区作为阿卡迪亚州的重要区域，当地居民为感谢阿波罗神庇佑家园、抵御灾害，决定修建一座宏伟的神庙，用于祭祀太阳神阿波罗，同时作为当地的宗教活动中心。这座神庙由古希腊著名建筑师伊克蒂诺主持设计，伊克蒂诺也是雅典帕特农神庙的设计者之一，他将自己多年的建筑经验融入其中，打造出这座兼具庄严性与艺术性的神庙。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前420年，神庙正式动工修建，耗时约20年，于公元前400年左右建成。神庙的建造采用了当时最先进的建筑工艺，整体坐北朝南，顺应山坡地势，既保证了采光充足，又能抵御山区的风雨侵蚀。其最具特色的便是混合柱式设计——正面采用多立克柱式，庄重雄浑，体现男性的阳刚之美；侧面采用爱奥尼柱式，纤细柔美，彰显女性的温婉之态；神庙内部则采用科林斯柱式，华丽精致，这是古希腊建筑中首次将三种柱式融合在一起，开创了混合柱式建筑的先河，对后世西方建筑产生了深远影响。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              在古希腊时期，巴赛阿波罗神庙是当地最重要的宗教圣地，每年都会举办盛大的祭祀仪式，来自周边城邦的信徒齐聚于此，向阿波罗神献祭、祈祷，祈求风调雨顺、家园安宁、身体健康。祭祀仪式上，还会举办诗歌朗诵、音乐演奏等活动，将宗教信仰与艺术审美完美融合，成为当地城邦文化的重要组成部分。
            </p>
            <p className="text-gray-700 leading-relaxed">
              随着罗马帝国的崛起，古希腊文明逐渐衰落，巴赛阿波罗神庙也随之被废弃，由于地处偏远山区，未遭到大规模破坏，仅因岁月侵蚀和地震影响，出现部分柱体坍塌、墙体破损的情况。中世纪时期，神庙曾被改造为基督教教堂，部分建筑结构被修改，但其核心柱廊和主体框架得以保留。1811年，英国考古学家首次对神庙进行系统发掘，出土了大量珍贵文物，包括雕塑残件、铭文石碑、祭祀器具等，这些文物大多被收藏于英国大英博物馆和希腊国家考古博物馆。20世纪以来，希腊政府对巴赛阿波罗神庙进行了多次修缮与保护，严格遵循"修旧如旧"的原则，修复坍塌的柱体、加固破损的墙体，同时建立了简易的考古陈列区，展示出土的文物与建筑构件。如今，这座千年神庙不仅是希腊重要的历史文化遗产，更是世界建筑史上的瑰宝，吸引着全球建筑学者、考古爱好者和游客前来探寻其背后的古代智慧与人文魅力。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程约1公里，建议游览1.5-2.5小时，节奏舒缓，兼顾打卡与深度体验</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：神庙游客入口</h5>
                    <p>入口处设有神庙简介牌与世界文化遗产标识，可拍照打卡，领取简易导览手册（免费提供），租赁讲解设备（6欧元/台）</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：考古陈列区（步行3分钟）</h5>
                    <p>展示神庙出土的雕塑残件、铭文石碑、祭祀器具等文物，通过文物了解神庙建造历程与古代祭祀习俗</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：神庙前庭（步行5分钟）</h5>
                    <p>进入神庙必经之路，地面留存古代石板路遗迹，两侧有小型柱廊残件，感受神庙庄严氛围，远眺山间风光</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：神庙主体遗迹（步行2分钟）</h5>
                    <p>核心景点，近距离观赏混合柱式建筑精妙：正面多立克柱雄浑挺拔，侧面爱奥尼柱纤细柔美，内部科林斯柱华丽精致</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：神庙后侧遗迹（步行3分钟）</h5>
                    <p>留存神庙后殿残墙与祭坛遗迹，游客较少氛围静谧，近距离观察墙体建筑痕迹，感受岁月沧桑，欣赏山间宁静风光</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：游客出口</h5>
                    <p>出口处有小型纪念商店，可购买神庙相关纪念品，如柱式模型、铭文复刻品、明信片等</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 神庙位于山区，海拔较高，气温比平原地区低3-5℃，建议携带薄外套</li>
                  <li>• 路面多为碎石路和台阶，雨后易滑，建议穿舒适的防滑步行鞋</li>
                  <li>• 山区紫外线较强，需携带遮阳帽、防晒霜与饮用水</li>
                  <li>• 神庙内禁止大声喧哗、随意触摸文物与遗迹，禁止攀爬柱体与墙体</li>
                  <li>• 山区信号较弱，建议提前下载离线地图，避免迷路</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">神庙入口处观景台</h4>
                  <p className="text-gray-700 text-sm">拍摄神庙全景最佳机位，可完整拍摄神庙整体轮廓，依山而建柱廊、错落有致建筑遗迹与周边山林植被相互映衬，画面恢弘大气。最佳时间：上午9:00-10:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">神庙主体柱廊前</h4>
                  <p className="text-gray-700 text-sm">拍摄建筑细节核心机位，可近距离拍摄多立克柱、爱奥尼柱细节，柱体雕刻纹理、铭文遗迹清晰可见，凸显古希腊建筑精湛工艺。最佳时间：下午14:00-15:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">神庙平台制高点</h4>
                  <p className="text-gray-700 text-sm">位于神庙主体最高处，可拍摄神庙后侧全景与山间风光，远处阿卡迪亚山脉层峦叠嶂，近处神庙遗迹古朴庄重，画面兼具历史感与自然美。最佳时间：傍晚16:30-17:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">考古陈列区门口</h4>
                  <p className="text-gray-700 text-sm">陈列区门口石板路与小型柱廊残件，是拍摄复古风、文艺风照片绝佳位置，路面碎石纹理、柱廊斑驳痕迹都能凸显岁月沧桑感。最佳时间：清晨8:30-9:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">神庙后侧山坡</h4>
                  <p className="text-gray-700 text-sm">从神庙后侧山坡可拍摄神庙侧面全景，柱廊线条感十足，搭配山间绿植，画面清新自然，既能展现神庙建筑美感，又能凸显山区静谧氛围。最佳时间：上午10:30-11:30</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间：清晨（8:30-10:30）和傍晚（16:30-17:30），光线柔和，游客较少</li>
                  <li>• 建议穿着纯色、简约风格衣物，如白色、米白色、浅灰色，与古朴建筑、翠绿山林形成对比</li>
                  <li>• 拍摄建筑全景时可使用广角镜头，展现其宏伟布局，拍摄细节时可使用长焦镜头，突出柱体、雕刻纹理</li>
                  <li>• 拍摄人物时可选择在柱廊前、石板路上等位置，搭配神庙背景，营造复古庄重氛围</li>
                  <li>• 山区风较大，拍摄时注意稳定设备，避免画面模糊</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">短途可达景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">安德里亚小镇</span>
                      <p className="text-sm text-gray-600">距离神庙约8公里，打车15分钟，费用约15欧元。宁静山区小镇，留存古希腊石板路、传统石屋与小型教堂</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">阿卡迪亚山脉徒步路线</span>
                      <p className="text-sm text-gray-600">距离神庙约3公里，小众徒步路线，沿途山林繁茂溪流潺潺，难度适中全程约5公里，适合户外探险</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">稍远但值得一游</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">梅西尼亚古城遗址</span>
                      <p className="text-sm text-gray-600">距离神庙约50公里，打车1小时，费用约50欧元。古希腊梅西尼亚城邦核心区域，留存坚固城墙、神庙遗迹、剧场遗址</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">特里波利斯市考古博物馆</span>
                      <p className="text-sm text-gray-600">距离神庙约40公里，打车40分钟，费用约35欧元。收藏伯罗奔尼撒半岛南部出土文物，包括来自巴赛神庙的文物，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">奥林匹亚遗址</span>
                      <p className="text-sm text-gray-600">距离神庙约100公里，自驾2小时。古希腊奥林匹克运动会发祥地，世界文化遗产，留存竞技场、神庙、祭坛遗迹</p>
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
                    <h5 className="font-medium">巴赛村或安德里亚小镇</h5>
                    <p>距离神庙较近，巴赛村距离神庙约2公里，打车10分钟可达，小镇氛围宁静，多为当地传统石屋改造住宿，体验山区乡村风情</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">安德里亚小镇</h5>
                    <p>距离神庙约8公里，住宿选择更多，配套相对完善，有餐厅、小型超市，出行便捷</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">特里波利斯市</h5>
                    <p>距离神庙约40公里，住宿选择最丰富，配套齐全，适合预算有限或喜欢热闹氛围游客，可打车或自驾前往神庙</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>巴赛村和安德里亚小镇有很多小众民宿，多由当地石屋改造，装修简约古朴，保留希腊山区建筑特色，35-80欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">自助公寓</h5>
                    <p>设施齐全，适合家庭或多人出行，25-55欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品乡村酒店</h5>
                    <p>安德里亚小镇有少量精品酒店，装修融合希腊传统元素与现代风格，周边山林环绕，60-110欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>特里波利斯市有多家性价比高的酒店，设施标准化，干净整洁，20-45欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 巴赛地区旅游旺季为6-8月，游客较多，建议提前1个月预订，避免无房或价格上涨</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（4-8欧元/天）</li>
                  <li>• 巴赛村部分民宿位于山坡上，无电梯，携带大件行李需提前确认</li>
                  <li>• 春秋季（4-6月、9-10月）气候宜人，游客较少，住宿价格适中，是最佳时节</li>
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
                    <li>• 4-6月、9-10月：气候宜人，游客较少，住宿价格适中</li>
                    <li>• 夏季（6-8月）：旅游旺季，游客较多但天气最佳</li>
                    <li>• 冬季（11-3月）：旅游淡季，游客稀少，适合喜欢静谧氛围</li>
                    <li>• 清晨傍晚：光线柔和，适合拍照，游客较少</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 神庙位于山区，海拔较高，气温比平原低3-5℃，建议携带薄外套</li>
                    <li>• 路面多为碎石路和台阶，建议穿舒适的防滑步行鞋</li>
                    <li>• 山区紫外线较强，需携带遮阳帽、防晒霜与饮用水</li>
                    <li>• 尊重考古遗址保护规定，不随意乱扔垃圾，保持遗迹整洁</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 近距离观赏混合柱式建筑精妙：多立克、爱奥尼、科林斯三种柱式完美融合</li>
                    <li>• 登上神庙平台，俯瞰周边阿卡迪亚山脉壮丽山景</li>
                    <li>• 参观考古陈列区，了解神庙出土文物与建筑构件</li>
                    <li>• 漫步山区小径，感受古希腊神庙与自然景观的和谐融合</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地电压：230V，插头为Type F型</li>
                    <li>• 货币：欧元，支持信用卡和移动支付</li>
                    <li>• 语言：希腊语，但旅游区英语基本通行</li>
                    <li>• 紧急电话：112（欧洲统一紧急电话），山区信号较弱</li>
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