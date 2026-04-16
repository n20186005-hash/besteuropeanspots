import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '沙特尔大教堂 Chartres Cathedral｜哥特瑰宝与彩窗圣殿 - 最佳欧洲景点',
  description: '朋友，如果你对哥特式建筑的想象还停留在书本上，那沙特尔大教堂绝对会给你一记“视觉重拳”。从火车站走出来，远远就能看到它那两座不对称的塔楼刺破天际，像一对沉默的巨人守护着这座小镇。走近了，那种扑面而来的宏伟感会让你不自觉屏住呼吸。但最震撼的还在里面——推开厚重的木门，光线瞬间被过滤成一片斑斓的海洋。近...',
}

export default function ChartresCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '沙特尔大教堂', href: '/attractions/chartres-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">沙特尔大教堂・Chartres Cathedral・法国・沙特尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            朋友，如果你对哥特式建筑的想象还停留在书本上，那沙特尔大教堂绝对会给你一记“视觉重拳”。从火车站走出来，远远就能看到它那两座不对称的塔楼刺破天际，像一对沉默的巨人守护着这座小镇。走近了，那种扑面而来的宏伟感会让你不自觉屏住呼吸。但最震撼的还在里面——推开厚重的木门，光线瞬间被过滤成一片斑斓的海洋。近200扇中世纪彩绘玻璃窗，尤其是那著名的“沙特尔蓝”，让整个空间弥漫着一种神圣又梦幻的光晕。那一刻，你真的能理解为什么中世纪的人们会称它为“石砌的圣经”。空气里混合着古老的石头气息和淡淡的烛蜡味，安静得能听到自己的心跳，偶尔有管风琴的低鸣从深处传来，时间在这里仿佛凝固了。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">朋友，如果你对哥特式建筑的想象还停留在书本上，那沙特尔大教堂绝对会给你一记“视觉重拳”。从火车站走出来，远远就能看到它那两座不对称的塔楼刺破天际，像一对沉默的巨人守护着这座小镇。走近了，那种扑面而来的宏伟感会让你不自觉屏住呼吸。但最震撼的还在里面——推开厚重的木门，光线瞬间被过滤成一片斑斓的海洋。近200扇中世纪彩绘玻璃窗，尤其是那著名的“沙特尔蓝”，让整个空间弥漫着一种神圣又梦幻的光晕。那一刻，你真的能理解为什么中世纪的人们会称它为“石砌的圣经”。空气里混合着古老的石头气息和淡淡的烛蜡味，安静得能听到自己的心跳，偶尔有管风琴的低鸣从深处传来，时间在这里仿佛凝固了。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="沙特尔大教堂" />
                <InfoRow label="英文名称" value="Chartres Cathedral" />
                <InfoRow label="正式名称" value="Chartres Cathedral" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="沙特尔" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="教堂主体：通常每日8:30-19:30（夏季可能延长至22:00）。地下室及北塔楼：开放时间较短，通常为特定时段，需单独购票进入。" />
              <InfoRow label="门票价格" value="进入教堂主体免费。参观地下室（Crypt）和攀登北塔楼（North Tower）需购票，联票约12欧元。具体价格可能随季节调整。" />
              <InfoRow label="地址" value="16 Cloître Notre Dame, 28000 Chartres, France" />
              <InfoRow label="交通方式" value="从巴黎蒙帕纳斯火车站（Gare Montparnasse）乘坐火车前往沙特尔站（Gare de Chartres），车程约1小时。出站后步行约10-15分钟即可抵达大教堂，沿途有清晰路标。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">沙特尔大教堂的故事，简直就是一部“浴火重生”的史诗。早在4世纪，这里就建起了第一座教堂，但我们现在看到的这座庞然大物，主要源于1194年那场毁灭性的大火之后。老教堂几乎被烧成白地，但奇迹般地，一件至关重要的圣物——圣母玛利亚的圣衣（Sancta Camisia）——被完好地保存了下来。信徒们把这看作神迹，于是倾尽全城、甚至全法之力，在短短几十年内（以中世纪的标准堪称神速）重建了这座教堂。正是这种“狂热”的集体信仰，催生了我们今天看到的经典哥特式结构：高耸的拱顶、飞扶壁，以及为了容纳更多彩窗而设计的巨大墙面。它就像一座信仰的纪念碑，记录着那个时代人们的精神追求和建筑技艺的巅峰。想想看，800多年来，它经历了宗教战争、法国大革命的风暴，甚至二战的炮火都奇迹般地绕开了它，那些彩窗曾被小心翼翼地拆下保存。站在里面，你触摸的每一块石头，都浸透了时间和故事。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议游览时间2-3小时。从西立面正门（皇家之门）进入，先感受中殿的纵深感与彩窗，然后顺时针或逆时针环绕参观侧廊与小礼拜堂，最后根据时间和体力决定是否参观地下室或攀登北塔楼。终点可设在教堂外的广场，回望全景。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>教堂地面上的大型石砌迷宫（Labyrinth）是必看亮点，通常周五部分座椅会被移开以便观看全貌。参观时请穿着舒适的鞋子。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  仰望西立面：欣赏著名的“皇家之门”雕塑和不对称的双塔。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  步入中殿：感受震撼的室内空间，抬头看网状拱顶。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  寻找“美丽玻璃圣母”窗：位于南侧耳堂，欣赏标志性的“沙特尔蓝”。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  观看迷宫：位于中殿地面，是中世纪朝圣者的灵修路径。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  环绕后殿回廊：参观一系列精美的小礼拜堂。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  （可选）进入地下室或攀登北塔楼。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  埃夫尔河畔远眺点</h4>
                  <p className="text-sm text-gray-700">位于教堂南侧河对岸，最佳拍摄时间为晴朗的下午，顺光拍摄，可将教堂全景与水中的倒影一同纳入镜头，画面宁静而壮丽。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  西立面广场</h4>
                  <p className="text-sm text-gray-700">清晨或黄昏，阳光为双塔和雕塑门廊镀上金边，采用广角镜头仰拍，能突出建筑的巍峨与细节。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  室内彩窗特写</h4>
                  <p className="text-sm text-gray-700">选择阳光充沛的正午前后，直接面对彩窗（如南玫瑰窗），关闭闪光灯，拍摄玻璃细节和透射下的绚丽光柱。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  回廊拱门框架</h4>
                  <p className="text-sm text-gray-700">站在后殿回廊的某一拱门下，以拱门为画框，拍摄主祭坛或远处的彩窗，增加照片的纵深感与结构感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 室内拍摄严禁使用闪光灯和三脚架（需特殊许可），以保护珍贵的彩窗和艺术品。尊重礼拜区域，保持安静。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  市中心精品酒店</h4>
                  <p className="text-sm text-blue-800">选择教堂广场附近的历史建筑酒店，开窗即见塔楼，体验极致便利与氛围，价格较高。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  火车站周边商务酒店</h4>
                  <p className="text-sm text-green-800">性价比之选，适合搭乘早班火车的旅客，步行至教堂约15分钟。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  小镇特色民宿</h4>
                  <p className="text-sm text-yellow-800">位于老城石板路巷弄中，更能沉浸于本地生活，通常由老房子改造，充满情调。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  巴黎当日往返</h4>
                  <p className="text-sm text-purple-800">大教堂游览完全可以作为从巴黎出发的一日游，节省住宿成本，灵活安排。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">沙特尔是宁静的小城，夜间活动较少。若想拍摄清晨无人的教堂或体验宁静的晨间氛围，建议在当地住一晚。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">沙特尔大教堂不仅仅是一座建筑，它更像一个光的容器，一个故事的宝库。当你穿过那片由千年彩窗投下的、流动的蓝色光晕时，会感到一种超越宗教的宁静与美。它用石头和玻璃讲述着信仰、坚韧与人类对永恒的追求。离开时，那份震撼心灵的“沙特尔蓝”，恐怕会久久萦绕在你的记忆里，成为你对法国、对哥特艺术最深邃的一抹印象。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
