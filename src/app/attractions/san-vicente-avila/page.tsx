import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿维拉圣文森特教堂・San Vicente Ávila・西班牙・阿维拉 | 最佳欧洲景点',
  description: '探索阿维拉圣文森特教堂，西班牙中世纪宗教建筑的璀璨瑰宝，罗曼式建筑向哥特式建筑过渡的典范之作，融合两种建筑风格精髓。',
}

export default function SanVicenteAvilaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿维拉圣文森特教堂', href: '/attractions/san-vicente-avila' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">阿维拉圣文森特教堂・San Vicente Ávila・西班牙・阿维拉</h1>
          <p className="text-lg text-gray-600 mb-6">
            阿维拉圣文森特教堂是西班牙阿维拉的标志性宗教建筑，始建于12世纪，为纪念4世纪被迫害的圣徒文森特、萨比娜和克里斯蒂塔而建，是罗曼式向哥特式过渡的经典范例。教堂以厚重的石质建筑、精美的雕塑装饰、高耸的三重后殿为特色，地下墓穴藏有珍贵圣母像，兼具宗教庄严与建筑艺术美感，是领略西班牙中世纪宗教文化、感受建筑风格演变的核心景点。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              阿维拉圣文森特教堂是西班牙阿维拉的标志性宗教建筑，始建于12世纪，为纪念4世纪被迫害的圣徒文森特、萨比娜和克里斯蒂塔而建，是罗曼式向哥特式过渡的经典范例。教堂以厚重的石质建筑、精美的雕塑装饰、高耸的三重后殿为特色，地下墓穴藏有珍贵圣母像，兼具宗教庄严与建筑艺术美感，是领略西班牙中世纪宗教文化、感受建筑风格演变的核心景点。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="阿维拉圣文森特教堂" />
                <InfoRow label="英文名称" value="Basilica of San Vicente de Ávila" />
                <InfoRow label="国家" value="西班牙（Spain）" />
                <InfoRow label="城市" value="阿维拉（Ávila）" />
                <InfoRow label="所属区域" value="西班牙卡斯蒂利亚-莱昂自治区，中部高原" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史起源" value="12世纪，纪念4世纪殉道圣徒" />
                <InfoRow label="建筑风格" value="罗曼式向哥特式过渡的典范" />
                <InfoRow label="核心特色" value="三重后殿、精美雕塑、地下墓穴" />
                <InfoRow label="宗教意义" value="圣徒殉道纪念地、重要朝圣地" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="夏季10:00-19:00，冬季10:00-13:30、16:00-18:30；周日及节假日16:00-18:00" />
              <InfoRow label="门票价格" value="成人票3欧元；优惠票2.2欧元；团体票2.2欧元/人；12岁以下儿童免费" />
              <InfoRow label="地址" value="Calle de San Vicente, 4, 05001 Ávila, Spain" />
              <InfoRow label="交通方式" value="从马德里乘火车约1.5小时，票价10-20欧元；火车站乘1路、3路公交3站可达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                阿维拉圣文森特教堂的历史渊源与基督教圣徒的传说紧密相连，其建造初衷是为了纪念4世纪罗马帝国迫害基督教时期，在阿维拉殉道的三位圣徒——文森特、萨比娜与克里斯蒂塔。据记载，这三位圣徒是兄妹，因坚定信仰基督教，拒绝放弃信仰而被罗马皇帝戴克里先下令迫害，最终殉道于阿维拉，当地信徒为纪念他们的虔诚与勇气，便计划建造教堂以安放其圣骨，传承其信仰精神。
              </p>
              <p>
                教堂的建造始于12世纪，正值西班牙中世纪宗教文化鼎盛时期，此时阿维拉作为卡斯蒂利亚地区的重要城市，宗教势力强大，成为基督教传播的重要节点。建造初期，教堂采用罗曼式建筑风格，以厚重的石质墙体、半圆拱券、坚固的立柱为核心特征，强调建筑的稳定性与庄严感，契合宗教建筑的神圣属性。随着哥特式建筑风格在欧洲的兴起，教堂在建造过程中逐步融入哥特式元素，成为罗曼式向哥特式过渡的典型代表，这种风格的融合，既保留了罗曼式的厚重古朴，又增添了哥特式的高耸挺拔与精致华丽。
              </p>
              <p>
                12至13世纪，教堂主体工程逐步完工，其三重高耸的后殿、精美的拱顶系统、华丽的门廊雕塑成为当时阿维拉宗教建筑的典范。教堂的南门雕刻有天使报喜的场景，西门则镌刻着基督与使徒的形象，还描绘了“富人与拉撒路”的寓言故事，雕塑细节精美，栩栩如生，展现了中世纪西班牙雕塑艺术的高超水平。地下墓穴中供奉着15世纪的“地下圣母”像，这尊圣母像被著名的圣特蕾莎修女深深崇敬，成为教堂的重要宗教象征，吸引了无数信徒前来朝拜。
              </p>
              <p>
                中世纪时期，阿维拉圣文森特教堂不仅是宗教朝拜的圣地，更是阿维拉地区宗教文化与艺术交流的中心。教堂内定期举办宗教仪式、弥撒活动，吸引了周边地区的信徒前来，同时也汇聚了当时顶尖的工匠、雕塑家与画家，对教堂进行不断的修缮与装饰，进一步丰富了教堂的艺术内涵。这段时期，教堂的影响力不断扩大，成为卡斯蒂利亚地区重要的宗教地标，见证了基督教在西班牙的传播与发展。
              </p>
              <p>
                20世纪以来，阿维拉圣文森特教堂被西班牙政府列为国家级历史遗迹，同时作为阿维拉古城的重要组成部分，与阿维拉中世纪城墙一同被联合国教科文组织列为世界文化遗产，受到全球范围内的保护与关注。如今，教堂依然承担着宗教功能，定期举办弥撒与宗教活动，同时向全球游客开放，成为展示西班牙中世纪宗教文化、建筑艺术与历史底蕴的重要窗口，每年吸引数十万游客与信徒前来探访、朝拜。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从阿维拉火车站出发，步行20分钟或乘坐1路公交抵达圣文森特街站，步行2分钟即可到达教堂正门。首先驻足教堂正门广场，欣赏教堂的整体外观，感受其罗曼式与哥特式融合的建筑风貌，拍摄教堂全景；随后进入教堂内部，先参观西门雕塑群，仔细观赏基督与使徒的雕刻细节，感受中世纪雕塑艺术的精湛。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  接着前往正厅，欣赏高耸的拱顶系统、石质立柱与彩绘玻璃，感受教堂内部的庄严静谧；之后前往地下墓穴，观赏被圣特蕾莎修女崇敬的“地下圣母”像，了解其宗教意义与历史渊源；再前往三重后殿，欣赏哥特式穹顶与精致的壁雕，感受哥特式建筑的高耸与华丽；最后参观教堂南侧的小型展厅，观赏陈列的宗教文物、古老手稿与雕塑碎片，了解教堂的发展历程，参观结束后，可在教堂周边的中世纪街巷漫步片刻，感受老城区的复古氛围，随后沿原路返回，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验教堂精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加导览服务、周边文化体验与美食品尝，深入感受教堂与阿维拉老城区的多元魅力。参观完教堂展厅后，预约教堂官方导览（导览费5欧元/人，全程1小时，有西班牙语、英语两种语言可选），跟随导览深入了解教堂建筑风格的演变、雕塑背后的宗教故事、圣徒殉道的历史，以及“地下圣母”像的传说，让游览更具深度。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  导览结束后，前往教堂附属的宗教礼品店，购买传统宗教手工艺品、圣像摆件等特色纪念品；随后漫步阿维拉老城区，探访周边的民俗小店，感受当地的生活气息；中午前往教堂附近的特色餐厅，品尝西班牙中部传统美食，如烤羊排、卡斯蒂利亚炖菜、托雷斯饼等，搭配当地产的葡萄酒，体验西班牙的饮食文化。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  下午，前往教堂附近的阿维拉古城墙，登上城墙俯瞰教堂与老城区的全景，感受中世纪古城的防御风貌；随后前往距离教堂800米的特蕾莎修女故居，了解圣特蕾莎修女的生平与事迹，感受其与教堂的深厚渊源；傍晚时分，返回教堂，欣赏夕阳下的教堂外观，感受夜幕降临前的静谧氛围，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验教堂文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 进入教堂需着装端庄，避免穿着短裤、短裙、露肩装，需脱帽参观</li>
                <li>• 教堂内禁止大声喧哗、追逐打闹，参观地下墓穴与宗教仪式区域需保持安静</li>
                <li>• 拍摄教堂内部雕塑与文物时，禁止使用闪光灯，避免损坏文物</li>
                <li>• 夏季（6-8月）是旅游旺季，参观人数较多，建议错峰前往</li>
                <li>• 教堂内无饮用水售卖，建议提前准备好饮用水</li>
                <li>• 导览服务需提前在教堂入口处预约，避免排队等待</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 教堂正门广场</h4>
                  <p className="text-sm text-gray-700">拍摄教堂全景的最佳机位，从广场中央可将教堂的整体外观尽收眼底，厚重的石质墙体、高耸的三重后殿、精美的门廊雕塑与周边的中世纪街巷相互映衬。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 西门雕塑群前</h4>
                  <p className="text-sm text-gray-700">西门是教堂最具艺术价值的区域之一，雕刻有基督与使徒的形象，还有“富人与拉撒路”的寓言故事，雕塑细节精美，栩栩如生。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 教堂正厅拱顶下</h4>
                  <p className="text-sm text-gray-700">教堂正厅的拱顶系统是罗曼式与哥特式风格融合的典范，高耸的拱顶、精美的拱券与石质立柱相互呼应，营造出庄严静谧的氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 地下墓穴入口处</h4>
                  <p className="text-sm text-gray-700">地下墓穴入口采用半圆拱券设计，搭配昏暗的光线，自带复古神秘的氛围，入口处的石质雕刻与“地下圣母”像的剪影极具画面感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 阿维拉古城墙观景台</h4>
                  <p className="text-sm text-gray-700">距离教堂约500米，登上古城墙，可将教堂与阿维拉老城区的全景尽收眼底，教堂的三重后殿在古城街巷的映衬下更加高耸。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 教堂南侧回廊</h4>
                  <p className="text-sm text-gray-700">回廊采用罗曼式拱券设计，两侧的石质立柱排列整齐，光影交错，自带复古静谧的氛围，回廊外的绿植与教堂的石质墙体相互映衬。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 教堂建筑以冷色调石质为主，建议穿搭深色或素色衣物（如黑色、灰色、米色），形成鲜明对比</li>
                <li>• 拍摄雕塑特写时，可近距离拍摄细节，突出雕塑的工艺之美</li>
                <li>• 室内拍摄时，避免使用闪光灯，可调整相机参数，利用自然光线拍摄</li>
                <li>• 尊重当地宗教规定，教堂祭坛区域、地下墓穴内拍摄时需保持安静</li>
                <li>• 拍摄人物时，需避免遮挡雕塑与建筑主体，尊重宗教场所的庄严性</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿维拉古城墙</h4>
                <p className="text-sm text-gray-700 mb-2">距离教堂约500米，步行7分钟可达，是阿维拉最具标志性的景观，也是联合国教科文组织认定的世界文化遗产。城墙始建于11世纪，全长约2.5公里，保留有88座塔楼与9座城门。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行7分钟 | 🏰 世界文化遗产</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿维拉大教堂</h4>
                <p className="text-sm text-gray-700 mb-2">距离教堂约1公里，步行12分钟可达，始建于12世纪，是西班牙最早的哥特式教堂之一，融合了罗曼式与哥特式建筑风格，教堂内藏有大量珍贵的壁画、雕塑与宗教文物。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行12分钟 | ⛪ 哥特式教堂</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">特蕾莎修女故居</h4>
                <p className="text-sm text-gray-700 mb-2">距离教堂约800米，步行10分钟可达，是圣特蕾莎修女出生与成长的地方，故居保留了16世纪的建筑风貌，内部陈列着圣特蕾莎修女的生平文物、手稿与个人物品。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🏛️ 历史人物故居</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿维拉考古博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离教堂约1.2公里，步行15分钟可达，馆内收藏了阿维拉地区从史前时期到中世纪的大量文物，包括古罗马时期的陶器、中世纪的雕塑、宗教用品等。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行15分钟 | 🏺 考古文物</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣托马斯修道院</h4>
                <p className="text-sm text-gray-700 mb-2">距离教堂约2公里，乘坐3路公交可直达，始建于14世纪，是一座融合了哥特式与文艺复兴式风格的修道院，院内保留了大量精美的壁画、雕塑与古籍。</p>
                <div className="text-xs text-gray-500">🚌 公交直达 | ⛪ 修道院</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">拉卡瓦列里娅城堡</h4>
                <p className="text-sm text-gray-700 mb-2">距离教堂约3公里，打车10分钟可达，始建于12世纪，是中世纪卡斯蒂利亚地区的重要防御城堡，城堡保留了完整的墙体、塔楼与护城河。</p>
                <div className="text-xs text-gray-500">🚗 车程10分钟 | 🏰 中世纪城堡</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城区核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离圣文森特教堂、古城墙、阿维拉大教堂等核心景点较近，步行即可抵达，周边环境安静复古，推窗即可欣赏中世纪街巷与建筑风貌。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-green-800">交通便捷，距离火车站步行5-10分钟，适合需要乘坐火车前往马德里、萨拉曼卡等周边城市的游客，周边有餐厅、便利店，生活便利。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">古城墙外围</h4>
                  <p className="text-sm text-yellow-800">距离教堂约1公里，环境清幽，性价比高，适合休闲度假的游客，可享受宁静的住宿环境，同时便于游览古城。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端历史主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城区内，部分由中世纪建筑改建而成，融合了复古与现代元素，自带餐厅、观景露台，部分房型可欣赏教堂或古城墙景观。</p>
                  <div className="text-xs text-gray-500">💎 历史体验 | 🏰 古建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于火车站附近或古城墙外围，步行可达核心景点，房间干净整洁，设施齐全，价格适中，性价比突出，适合大多数游客。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围，体验地道的西班牙生活。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的旅行者，适合背包客和年轻游客。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-8月、10-11月）：</strong>建议提前1-2个月预订，秋季风光最佳，也是宗教节日集中期</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>文化套餐：</strong>部分高端酒店推出住宿+景点联票的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>西班牙住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>货币注意：</strong>西班牙通用欧元，酒店均支持欧元支付</p>
                    <p><strong>注意事项：</strong>老城区夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                阿维拉圣文森特教堂，这座矗立在西班牙中世纪古城中的宗教瑰宝，历经近千年的风雨变迁，依然以厚重的石质墙体、精美的雕塑装饰、庄严的宗教氛围，诉说着西班牙中世纪的宗教传奇与建筑艺术魅力。它既有罗曼式建筑的古朴厚重，又有哥特式建筑的高耸华丽；既有宗教圣地的庄严静谧，又有历史遗迹的人文底蕴；既有雕塑艺术的精湛绝伦，又有宗教文化的深厚积淀。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以走进教堂，触摸千年建筑的纹理，感受宗教信仰的力量；可以驻足雕塑前，欣赏中世纪艺术的精髓，读懂背后的历史故事；可以漫步周边街巷，穿梭于中世纪古城墙之下，感受阿维拉的复古风情。无论是独自旅行、情侣出游还是家庭度假，阿维拉圣文森特教堂都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与宗教的浸润中，读懂西班牙中部的独特魅力，爱上这片兼具人文底蕴与建筑之美的土地。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}