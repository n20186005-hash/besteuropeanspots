import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里昂历史中心 Historic Centre of Lyon｜穿越两千年，漫步在丝绸与光影交织的世界遗产老城 - 最佳欧洲景点',
  description: '踏入里昂历史中心，就像一头扎进了一部活着的欧洲城市编年史。这里不是那种被精心修复得一丝不苟的“样板间”，而是充满了生活气息。我最爱穿梭在“特拉布oules”之间——那是连接索恩河畔与富维耶山腰的秘密通道，一条条狭窄蜿蜒的阶梯小巷，两旁是文艺复兴时期色彩斑驳的老房子，头顶是拱廊和天桥。走着走着，你可能...',
}

export default function HistoricCentreOfLyonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '里昂历史中心', href: '/attractions/historic-centre-of-lyon' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">里昂历史中心・Historic Centre of Lyon・法国・里昂</h1>
          <p className="text-lg text-gray-600 mb-6">
            踏入里昂历史中心，就像一头扎进了一部活着的欧洲城市编年史。这里不是那种被精心修复得一丝不苟的“样板间”，而是充满了生活气息。我最爱穿梭在“特拉布oules”之间——那是连接索恩河畔与富维耶山腰的秘密通道，一条条狭窄蜿蜒的阶梯小巷，两旁是文艺复兴时期色彩斑驳的老房子，头顶是拱廊和天桥。走着走着，你可能突然闯入一个洒满阳光的静谧内院，或者从一扇小门出来，眼前豁然开朗，整个里昂红屋顶城市画卷在脚下铺开。空气里混合着老石头的气息、面包店的黄油香，还有从“里昂妈妈”餐厅飘出的浓郁酱汁味。这里白天是游客和居民的漫步天堂，夜晚当灯光亮起，整片老城又变得温柔而神秘，富维耶山上的圣母院如同金色皇冠，俯瞰着流淌的索恩河。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">踏入里昂历史中心，就像一头扎进了一部活着的欧洲城市编年史。这里不是那种被精心修复得一丝不苟的“样板间”，而是充满了生活气息。我最爱穿梭在“特拉布oules”之间——那是连接索恩河畔与富维耶山腰的秘密通道，一条条狭窄蜿蜒的阶梯小巷，两旁是文艺复兴时期色彩斑驳的老房子，头顶是拱廊和天桥。走着走着，你可能突然闯入一个洒满阳光的静谧内院，或者从一扇小门出来，眼前豁然开朗，整个里昂红屋顶城市画卷在脚下铺开。空气里混合着老石头的气息、面包店的黄油香，还有从“里昂妈妈”餐厅飘出的浓郁酱汁味。这里白天是游客和居民的漫步天堂，夜晚当灯光亮起，整片老城又变得温柔而神秘，富维耶山上的圣母院如同金色皇冠，俯瞰着流淌的索恩河。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="里昂历史中心" />
                <InfoRow label="英文名称" value="Historic Centre of Lyon" />
                <InfoRow label="正式名称" value="Historic Centre of Lyon" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="里昂" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放。内部各博物馆、教堂等独立景点开放时间各异，通常为周二至周日 10:00-18:00。" />
              <InfoRow label="门票价格" value="游览历史街区本身免费。进入富维耶圣母院、里昂高卢罗马博物馆、里昂微型电影博物馆等独立景点需购票，票价约5-12欧元不等。" />
              <InfoRow label="地址" value="Vieux Lyon, 69005 Lyon, France" />
              <InfoRow label="交通方式" value="从里昂圣埃克絮佩里机场乘坐Rhônexpress机场快线至里昂帕尔迪厄火车站，约30分钟，再转乘地铁D线至Vieux Lyon站，约10分钟。从里昂帕尔迪厄火车站直接乘坐地铁D线至Vieux Lyon站，约15分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">里昂的故事要从公元前43年说起，罗马人在这里建立了“卢格杜努姆”，它一度成为高卢地区的首府。今天你还能在富维耶山上找到古罗马剧场的遗迹，坐在那些古老的石阶上，仿佛能听到两千年前的喧嚣。时间快进到中世纪，里昂凭借地处两条大河（罗讷河与索恩河）交汇处的优势，贸易蓬勃发展，老城区的核心就是在这一时期形成的。但真正让里昂老城焕发独特光彩的，是15到16世纪的文艺复兴时期。当时富有的意大利丝绸商人被吸引至此，他们建造了那些带有华丽内庭、螺旋楼梯和精美窗棂的“豪宅”，也就是现在我们看到的“特拉布oules”两侧的建筑。这些建筑不仅美观，其走廊和天桥系统也极具功能性，方便丝绸运输和商人往来。18世纪以后，丝绸工业的重心逐渐转移，但老城的格局和灵魂被完整保留了下来。1998年，这片见证了罗马、中世纪到文艺复兴层层叠叠历史的广阔区域，被联合国教科文组织列为世界遗产，它不仅是法国的宝藏，更是欧洲城市文明演进的一个鲜活剖面。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从索恩河边的圣让首席大教堂出发，先探索山脚下的文艺复兴老城区，然后通过“特拉布oules”通道向上攀登至富维耶山，参观圣母院和古罗马剧场，最后乘登山缆车或步行下山，全程步行游览约需3-4小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>使用手机地图或老城区的指示牌寻找“特拉布oules”入口，穿一双绝对舒适的鞋是明智之举。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从圣让首席大教堂开始，欣赏其混合了罗曼和哥特式的建筑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  钻进“玫瑰塔”附近的“特拉布oules”小巷，感受迷宫般的氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  沿着通道上行至富维耶圣母院，俯瞰全城景色。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  参观圣母院旁的罗马剧场遗址，感受古今交融。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  下山后漫步于河畔，看看老城区的夜景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  富维耶圣母院观景台</h4>
                  <p className="text-sm text-gray-700">日落时分，向西拍摄，索恩河、老城红屋顶与远处天际线笼罩在金色余晖中。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  “玫瑰塔”旁的“特拉布oules”阶梯</h4>
                  <p className="text-sm text-gray-700">上午阳光斜射时，捕捉石阶、拱廊与墙上光影形成的几何美感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  圣让广场望向圣让首席大教堂</h4>
                  <p className="text-sm text-gray-700">利用广场上的喷泉作为前景，拍摄教堂立面的庄严全景。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  索恩河对岸的码头</h4>
                  <p className="text-sm text-gray-700">夜晚蓝调时刻，以河水为镜，拍摄亮起灯光的富维耶山和老城建筑的倒影。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• “特拉布oules”内光线较暗，建议调高相机感光度或使用大光圈镜头。尊重居民隐私，避免拍摄私人庭院内部。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  预算型</h4>
                  <p className="text-sm text-blue-800">选择佩拉什火车站附近或罗讷河左岸的现代街区酒店，性价比高，交通便利。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  特色型</h4>
                  <p className="text-sm text-green-800">入住老城区内由古老建筑改造的精品酒店或民宿，沉浸式体验历史氛围。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  景观型</h4>
                  <p className="text-sm text-yellow-800">预订富维耶山半山腰的酒店，享受推开窗就是无敌城市全景的体验。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  便利型</h4>
                  <p className="text-sm text-purple-800">住在半岛区（两河之间），这里餐饮购物丰富，步行至老城区和主要景点都很方便。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城区的石板路可能对携带大件行李的游客不太友好，预订时请留意酒店是否提供行李协助服务。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">里昂历史中心最打动我的，是它那种“层叠感”。罗马的石头、中世纪的教堂、文艺复兴的庭院、现代的生活气息，全都和谐地交织在一起。它不是一个仅供瞻仰的博物馆，而是一座依然在呼吸、在跳动的心脏。在这里迷路都是一种享受，因为每一次转角都可能遇见惊喜——或许是一家飘香百年的老餐馆，或许是一段通向历史深处的阶梯。如果你想感受一座欧洲古城最真实、最丰满的脉搏，里昂老城会给你一个漫长而温暖的拥抱。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
