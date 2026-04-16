import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴特温普芬 Bad Wimpfen｜漫步在皇帝行宫与彩色木筋屋间的中世纪童话 - 最佳欧洲景点',
  description: '想象一下，你站在内卡河畔的山坡上，眼前是一座仿佛从童话书里直接搬出来的小镇。这就是巴特温普芬给我的第一印象。蜿蜒的鹅卵石小路两旁，挤满了色彩斑斓的木筋屋，每一栋都歪歪扭扭，却又和谐地依偎在一起，像一群穿着花衣裳的老朋友。空气中飘着咖啡香和刚出炉的蛋糕味。最震撼的是那座红色的“蓝塔”，它孤高地耸立着，...',
}

export default function BadWimpfenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '巴特温普芬', href: '/attractions/bad-wimpfen' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">巴特温普芬</h1>
          <p className="text-xl text-gray-600 mb-4">Bad Wimpfen</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">德国</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">巴特温普芬</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你站在内卡河畔的山坡上，眼前是一座仿佛从童话书里直接搬出来的小镇。这就是巴特温普芬给我的第一印象。蜿蜒的鹅卵石小路两旁，挤满了色彩斑斓的木筋屋，每一栋都歪歪扭扭，却又和谐地依偎在一起，像一群穿着花衣裳的老朋友。空气中飘着咖啡香和刚出炉的蛋糕味。最震撼的是那座红色的“蓝塔”，它孤高地耸立着，是曾经辉煌的施陶费尔皇帝行宫留下的倔强印记。在这里，时间好像被调慢了，你可以漫无目的地闲逛，摸摸古老的城墙，在集市广场发发呆，感觉整个中世纪都温柔地包裹着你。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">蓝塔和行宫教堂博物馆的开放时间有显著的季节性，冬季（11月-3月）可能只在周末下午开放，计划冬季出行务必提前在官网确认。门票对持有学生证、老年证或家庭有相应优惠。古城内部分小巷坡度较陡，穿着舒适的步行鞋非常重要。小镇同时也是温泉疗养地，可以结合游览体验当地的温泉设施。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">巴特温普芬的故事，是一部从罗马驿站到帝国行宫的兴衰史。早在罗马时期，这里就因为地处内卡河畔的战略位置而有人定居。但它的高光时刻无疑属于中世纪。公元12世纪，统治神圣罗马帝国的霍亨施陶芬王朝看中了这里，开始大兴土木，建造了一座宏伟的皇帝行宫。想想看，红胡子腓特烈一世等帝王可能曾在此居住、理政，小镇一度是帝国重要的政治中心之一，那该是多么煊赫的场面。然而，王朝更迭，命运无常。随着施陶费尔家族的衰落，行宫也逐渐失去了往日的重要性，并在后来的战争中被部分摧毁。幸运的是，小镇没有就此沉沦。那些美丽的木筋屋在中世纪后期和文艺复兴时期被建造起来，商人和手工业者让这里重新焕发生机，形成了我们今天看到的、行宫遗迹与民居和谐共存的独特景观。漫步其中，就像在阅读一本立体的历史书，帝国的余晖与市井的烟火气奇妙地交融在一起。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐游览路线从古城南端的“下城门”开始，一路向北穿过老城核心区，最终抵达山顶的施陶费尔行宫遗址和蓝塔，全程步行游览约需2-3小时，轻松而充实。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从下城门进入，感受古城入口的仪式感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  漫步主街（Hauptstraße），欣赏两侧精美的木筋屋立面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  抵达集市广场，参观古老的市政厅和喷泉。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  参观行宫教堂，了解其历史。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  登上蓝塔，俯瞰古城全景和内卡河湾。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  在行宫遗址公园散步，感受历史的宁静。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">小镇小路如迷宫，但主要景点都有德英双语指示牌，跟着“Historische Altstadt”标志走就不会错。一定要穿一双好走的鞋，因为有不少上下坡的石板路。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **蓝塔脚下仰拍**：最佳时间在下午，阳光为红砂岩塔楼镀上金边，仰拍角度能突出其巍峨与历史的沧桑感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **集市广场喷泉旁**：以色彩缤纷的木筋屋群为背景，拍摄人物或静物，能完美体现中世纪小镇的温馨与活力。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **内卡河对岸远眺**：从河对岸的小径上拍摄，可以将整个古城、蓝塔以及教堂尖顶一并收入镜头，构成一幅经典的风景画，清晨或黄昏光线最佳。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **骑士巷（Rittergasse）**：这条狭窄的小巷两侧木筋屋极富韵味，利用巷道的纵深感拍摄，能营造出穿越时空的视觉效果。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">拍摄木筋屋时，注意观察其有趣的细节，如古老的招牌、雕刻和窗台上的鲜花，这些能让照片更有故事感。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **古城内历史酒店**：入住翻修过的古老木筋屋酒店，沉浸式体验中世纪氛围，价格中上。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **内卡河畔民宿**：选择河岸边的家庭旅馆，开窗即见古城美景，安静惬意，性价比高。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **小镇边缘现代酒店**：对于自驾游客，选择镇外带停车场的现代舒适型酒店更为方便。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **海尔布隆市区酒店**：如果希望有更多餐饮购物选择，可以住在大城市海尔布隆，乘短途火车前来一日游。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">古城内的住宿数量有限且非常热门，尤其是旺季，务必提前预订。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">巴特温普芬是一个能让人心立刻静下来的地方。它没有喧嚣的游客大军，只有流淌的光阴和沉淀的故事。在这里，帝国霸业的雄心最终化作了塔楼的一抹残阳，而普通人建造的家园却在岁月里开出了温暖的花。它教会我，最动人的风景，往往是宏伟历史与平凡生活交织出的那一份真实与安宁。如果你也想寻找一个逃离现实的童话角落，来这里就对了。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="古城区域全天开放。主要景点如施陶费尔皇宫塔楼（蓝塔）和行宫教堂博物馆开放时间一般为4月至10月，周二至周日 10:00-17:00；11月至3月开放时间缩短或仅周末开放。" />
                <InfoRow icon="🎫" label="门票" value="进入古城免费。登蓝塔门票约3欧元，行宫教堂博物馆门票约4欧元，联票约6欧元。" />
                <InfoRow icon="📍" label="地址" value="74206 Bad Wimpfen, Baden-Württemberg, Germany" />
                <InfoRow icon="🚌" label="交通" value="从斯图加特机场出发，乘坐火车前往海尔布隆中央火车站，换乘区域列车（S-Bahn）至巴特温普芬站，全程约1.5-2小时。从火车站步行约10-15分钟即可进入古城老城区。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
