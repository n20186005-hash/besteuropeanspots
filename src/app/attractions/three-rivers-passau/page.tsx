import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '帕绍 Passau｜在多瑙河、因河与伊尔茨河交汇处邂逅绝色巴伐利亚水城 - 最佳欧洲景点',
  description: '第一次看到帕绍，是在一个清晨，薄雾像轻纱一样缠绕在多瑙河面上。我站在因河的岸边，看着湛蓝如宝石的因河水，与略显浑黄的多瑙河水，在城市的尖角处缓缓相拥，却迟迟不肯完全交融，形成一道清晰而柔软的色带。那种静谧的魔力，让你瞬间屏住呼吸。空气里是河水特有的、略带腥甜的湿润气息，混合着从老城石板缝里透出来的、...',
}

export default function ThreeRiversPassauPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '帕绍（三河交汇之城）', href: '/attractions/three-rivers-passau' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`帕绍（三河交汇之城）・Passau・德国・巴伐利亚州，帕绍`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次看到帕绍，是在一个清晨，薄雾像轻纱一样缠绕在多瑙河面上。我站在因河的岸边，看着湛蓝如宝石的因河水，与略显浑黄的多瑙河水，在城市的尖角处缓缓相拥，却迟迟不肯完全交融，形成一道清晰而柔软的色带。那种静谧的魔力，让你瞬间屏住呼吸。空气里是河水特有的、略带腥甜的湿润气息，混合着从老城石板缝里透出来的、几百年的苔藓味道。远处，圣史蒂芬大教堂巨大的绿色洋葱顶圆塔，正被第一缕阳光镀上金边，钟声当当响起，不疾不徐，回荡在河谷之间，惊起一群鸽子。
你很快会发现，帕绍的脉搏是与这三条河同步跳动的。当地人骑着自行车，叮铃铃地掠过河岸小道；老人们拿着报纸，坐在临河的长椅上，一坐就是半天，看游轮缓缓驶过；学生们则成群结队，坐在古老的石阶上聊天，笑声顺着水波传得很远。这里不像柏林或慕尼黑那样喧嚣，它有一种被水流安抚过的宁静与自得其乐。走在迷宫般的巷弄里，脚下是光滑的鹅卵石，两旁是刷成粉黄、淡绿或赭石色的房子，阳台上开满天竺葵。你仿佛能听到几个世纪以来，盐商、船工、主教和学者在这里留下的脚步声。
这座城市最打动人心的，或许正是这种极致的对比与和谐。一边是奔流不息、象征着时间与远方的三条大河，另一边是被它们温柔环抱、仿佛凝固在旧时光里的精巧老城。力量与柔美，流动与静止，广阔的河景与亲密的街巷，在这里达成了完美的平衡。你既是宏大地理景观的观察者，又是温暖市井生活的参与者。这种双重体验，让帕绍从众多美丽小镇中脱颖而出，成为一颗镶嵌在多瑙河畔的、无法复制的明珠。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次看到帕绍，是在一个清晨，薄雾像轻纱一样缠绕在多瑙河面上。我站在因河的岸边，看着湛蓝如宝石的因河水，与略显浑黄的多瑙河水，在城市的尖角处缓缓相拥，却迟迟不肯完全交融，形成一道清晰而柔软的色带。那种静谧的魔力，让你瞬间屏住呼吸。空气里是河水特有的、略带腥甜的湿润气息，混合着从老城石板缝里透出来的、几百年的苔藓味道。远处，圣史蒂芬大教堂巨大的绿色洋葱顶圆塔，正被第一缕阳光镀上金边，钟声当当响起，不疾不徐，回荡在河谷之间，惊起一群鸽子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，帕绍的脉搏是与这三条河同步跳动的。当地人骑着自行车，叮铃铃地掠过河岸小道；老人们拿着报纸，坐在临河的长椅上，一坐就是半天，看游轮缓缓驶过；学生们则成群结队，坐在古老的石阶上聊天，笑声顺着水波传得很远。这里不像柏林或慕尼黑那样喧嚣，它有一种被水流安抚过的宁静与自得其乐。走在迷宫般的巷弄里，脚下是光滑的鹅卵石，两旁是刷成粉黄、淡绿或赭石色的房子，阳台上开满天竺葵。你仿佛能听到几个世纪以来，盐商、船工、主教和学者在这里留下的脚步声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城市最打动人心的，或许正是这种极致的对比与和谐。一边是奔流不息、象征着时间与远方的三条大河，另一边是被它们温柔环抱、仿佛凝固在旧时光里的精巧老城。力量与柔美，流动与静止，广阔的河景与亲密的街巷，在这里达成了完美的平衡。你既是宏大地理景观的观察者，又是温暖市井生活的参与者。这种双重体验，让帕绍从众多美丽小镇中脱颖而出，成为一颗镶嵌在多瑙河畔的、无法复制的明珠。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`帕绍（三河交汇之城）`} />
                <InfoRow label="英文名称" value={`Passau`} />
                <InfoRow label="正式名称" value={`Passau`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`巴伐利亚州，帕绍`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座由古罗马堡垒发展而来，长期作为神圣罗马帝国时期重要主教亲王采邑，并因其独一无二的三河交汇地理位置而成为中欧关键贸易与文化枢纽的城市。`} />
                <InfoRow label="建筑特色" value={`色彩斑斓的巴洛克与哥特式民居紧紧簇拥在狭窄的半岛上，尖塔与山墙倒映在变幻的河水中，呈现出独一无二的水城天际线。`} />
                <InfoRow label="建筑风格" value={`以意大利风格的巴洛克为主导（尤其在主教权力鼎盛时期），融合了哥特式的骨架与战后谨慎重建的现代功能主义，形成层次分明的建筑史画卷。`} />
                <InfoRow label="文化价值" value={`不仅是地理意义上的交汇点，更是南德巴伐利亚文化、奥地利风情与多瑙河中游文明的生动融合体，被誉为“巴伐利亚的威尼斯”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城市全年开放，各景点时间各异。核心景点圣史蒂芬大教堂（Dom St. Stephan）通常每日开放，夏季（4月-10月）为6:30-19:00，冬季缩短至6:30-18:00。老市政厅（Altes Rathaus）及观景塔开放时间为10:00-16:00，周一可能闭馆。韦斯特城堡（Veste Oberhaus）博物馆开放时间为3月中旬至11月初，每天9:00-17:00。建议行前务必在官网或当地旅游信息中心核对最新时间，许多景点在圣诞节、元旦及复活节期间有特殊安排。`} />
              <InfoRow label="门票价格" value={`城市本身免费游览。主要景点单独收费：圣史蒂芬大教堂免费，但捐赠建议2欧元；参观其拥有世界最大管风琴的演奏会需购票，约10-15欧元。韦斯特城堡博物馆成人票约9欧元，优惠票约5欧元。老市政厅历史大厅与观景塔联票约8欧元。提供“帕绍欢迎卡”，可在酒店或信息中心获取，含部分景点折扣及24小时免费公交。`} />
              <InfoRow label="地址" value={`Tourist-Information Passau， Rathausplatz 3， 94032 Passau， Germany`} />
              <InfoRow label="交通方式" value={`帕绍是德国重要的铁路枢纽。从慕尼黑中央火车站（München Hbf）出发，乘坐区域快车（RE）或城际列车（IC），约2小时直达帕绍主火车站（Passau Hbf），班次频繁，每小时至少有1-2班。从维也纳或布拉格也有直达的国际列车。帕绍主火车站位于老城边缘，步行至三河交汇处仅需15分钟。城内所有景点均可轻松步行到达，坡度较大的城堡区也可乘坐市内公交车（如Linie 1， 2）前往。自驾可将车停在老城外围的停车场（如“Parkhaus am Theater”），老城内部多为步行区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解帕绍，你得先把手放在地图上那个狭窄的三角形半岛尖端。早在公元前，凯尔特人就在这里定居，而罗马人更是敏锐地发现了它的战略价值，在此建立了名为“巴塔瓦”（Batava）的城堡，守卫着多瑙河边境。河流，是它命运的起点。中世纪早期，帕绍逐渐成为巴伐利亚公爵们的重要据点，但真正改变它城市DNA的，是739年圣博尼法斯在此建立主教区。从此，帕绍不仅仅是军事要塞，更成了宗教与文化的心脏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了13世纪，帕绍主教被神圣罗马帝国皇帝授予了亲王主教的头衔，这意味着他们不仅是精神领袖，还是拥有世俗统治权的君主。这座“主教亲王采邑”进入了黄金时代。财富与权力随着多瑙河的贸易滚滚而来。盐、从上游运来的木材、来自东方的货物，都在这里的码头集散。你可以想象当时市场的喧嚣：不同口音的商贩、穿着华丽的教士、搬运货物的劳工，交织成一幅繁荣的画卷。也正是这个时期，城市开始大兴土木，我们今天看到的许多教堂和富丽堂皇的市民建筑，都奠基于此。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，帕绍的历史并非一帆风顺。17世纪，一场灾难性的大火几乎将整个哥特风格的老城夷为平地。但这却意外地带来了转机。当时的主教们深受意大利巴洛克艺术的影响，他们聘请了来自伦巴第的建筑师和泥瓦匠，在原址上重建了一座崭新的、意大利风情的巴洛克城市。圣史蒂芬大教堂那令人过目难忘的华丽内部，满是湿壁画和金色灰泥装饰，就是这次“凤凰涅槃”最辉煌的成果。这场大火，仿佛是天意，烧掉了一个中世纪的帕绍，却催生了一个更炫目、更艺术的帕绍。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪初，随着神圣罗马帝国的解体，帕绍主教的世俗权力被剥夺，城市并入了巴伐利亚王国。它的政治地位下降了，但作为交通枢纽的重要性依旧。蒸汽船的时代到来，多瑙河上的航行更加繁忙。第二次世界大战末期，帕绍遭受了猛烈的空袭，老城超过一半的建筑被毁。战后，德国人没有选择完全现代化的重建，而是近乎执拗地按照旧图纸和照片，一砖一瓦地复原了那些巴洛克和文艺复兴的立面。我们今天漫步时感受到的“古意”，背后是整整一代人对于文化传承的惊人坚持与深情。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今的帕绍，是古老传统与现代活力的结合。它依然是重要的内河港口，停满了白色的多瑙河游轮。同时，它也是一座充满活力的大学城，年轻人的注入让古老的街巷洋溢着新的生机。从罗马堡垒到亲王主教都城，从贸易枢纽到文化瑰宝，帕绍的故事就像它脚下的三条河，有平缓的流淌，也有汹涌的波涛，最终汇合成一段深沉而动人的历史长卷。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受帕绍的精髓，建议至少安排一整天的沉浸式游览。最佳抵达时间是清晨九点前，此时旅行团的大巴尚未涌入，阳光柔和，河面常有一层薄雾，是拍照和享受宁静老城的黄金时刻。游览节奏宜慢不宜快，核心是沿着河流的脉络和山丘的起伏，体验“水陆交替”的视角变幻。整体耗时约8-9小时，包括充足的发呆、咖啡和用餐时间。路线设计为环形：先从河岸开始建立宏观印象，然后深入老城巷弄感受细节，再登高至城堡俯瞰全景，最后在傍晚时分回到三河交汇的尖角，看夕阳如何为这座城市涂抹上最动人的色彩。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`老城很多小巷是陡峭的上下坡，请务必穿一双舒适防滑的步行鞋，高跟鞋在这里是“灾难级”选择。
如果计划参观多个收费景点，记得在旅游信息中心询问最新的联票或折扣卡，能省下不少零钱。
帕绍是大学城，治安很好，但傍晚后一些僻静的河岸小径灯光较暗，建议结伴而行。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一早从帕绍主火车站出来，先别急着钻进小巷，径直走到多瑙河畔的“林茨街”（Ländstraße），让那宽阔的河面、对岸的绿野和偶尔鸣笛驶过的游轮给你一个气势磅礴的初印象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着河岸向南漫步，穿过挂满爱情锁的“爱情桥”，走到老城最尖端的“三河角”（Dreiflüsseeck），静静地观察多瑙河、因河两股不同颜色的水流如何缠绵交织。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身步入迷宫般的老城中心，让脚步被光滑的石板路牵引，路过那些满是浮雕的门洞和飘着咖啡香的面包店，目标直指巍峨的圣史蒂芬大教堂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进大教堂内部，不要急着拍照，先找一张长椅坐下，仰头看那金碧辉煌的穹顶壁画，等待整点时分世界最大教堂管风琴发出震撼人心的试音，让声音穿透你的身体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂的侧门溜出来，拐进狭窄的“鞋匠巷”（Schustergasse），在挂满手工彩绘玻璃片的小店“玻璃城堡”前驻足，看阳光如何透过它们洒下彩虹般的光斑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着陡峭的“城堡小径”（Burggasse）或者搭乘便捷的城堡巴士，一口气登上韦斯特城堡所在的石灰岩山丘，在城堡露台的咖啡馆点一杯啤酒，360度环视脚下三河环绕的城市全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，拜访老市政厅（Altes Rathaus），登上其高高的钟楼，换个角度欣赏河流与屋顶交织的图案，并仔细观看外墙描绘城市传说的巨大壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，回到因河岸边，找一家有户外座位的餐厅，点一份巴伐利亚白香肠配甜芥末，看着河水从宝石蓝渐渐变成深靛青，游船亮起灯火，慢慢驶入温柔的夜色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`韦斯特城堡观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光最佳，使用广角镜头，将前景的城堡石墙与中景的彩色老城屋顶、背景蜿蜒的河流一同纳入画面，层次感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`三河交汇处航拍视角（或从城堡俯拍）`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗无风的清晨，利用无人机或长焦镜头从城堡方向拍摄，可以清晰地捕捉到蓝绿两色河水交汇的“泾渭分明”奇观，配上半岛尖端的城市轮廓。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣史蒂芬大教堂内部管风琴与穹顶`}</h4>
                  <p className="text-sm text-gray-700">{`白天任何时间进入，但需使用高感光度相机和三脚架（允许且安静使用），对准巨大的金色管风琴与上方绘满天堂场景的穹顶，构图力求对称庄严。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老市政厅壁画墙下的人文街拍`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，站在广场对面，以巨幅历史壁画为背景，等待有特色的行人（如当地老人、街头艺人）走过时按下快门，故事感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`因河畔的“明信片角度”`}</h4>
                  <p className="text-sm text-gray-700">{`从“爱情桥”走向老城的路上回望，傍晚华灯初上时，对岸的巴洛克建筑群灯火倒映在湛蓝的因河水中，是拍摄经典水城夜景的绝佳位置。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内部拍摄请绝对保持安静并关闭闪光灯，尊重正在祈祷的人。使用无人机需严格遵守德国及巴伐利亚州的空域规定，老城及城堡上空常有禁飞限制，务必提前查证。多利用河流的反光来增加画面的生动性，尤其是拍摄建筑倒影时。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景首选`}</h4>
                  <p className="text-sm text-blue-800">{`位于三河交汇处半岛尖端的古典酒店，房间窗户推开就是流淌的河水与过往的船只，清晨在潺潺水声中醒来，仿佛住在一条永远停泊的豪华游轮上。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城核心体验`}</h4>
                  <p className="text-sm text-green-800">{`由一栋17世纪商人宅邸改造的精品酒店，房间保留了古老的木梁结构和印花壁纸，下楼就是铺着鹅卵石的静谧广场，去哪都只需步行五分钟。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`学生区活力之选`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在因河对岸的大学区，价格亲民，周围遍布有趣的咖啡馆和小酒馆，晚上可以混在当地学生中喝一杯，体验帕绍年轻而真实的一面。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城堡山腰隐居`}</h4>
                  <p className="text-sm text-purple-800">{`位于上山小路旁的特色民宿，由一家人亲手经营，房间朴素但一尘不染，拥有一个可以俯瞰全城的小花园，适合追求绝对宁静与无敌视野的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）及圣诞节市场期间是绝对旺季，务必提前至少两三个月预订，尤其是临河的热门酒店。老城内的住宿大多在历史建筑中，可能没有电梯，预订时如果行李较重最好确认。住在河对岸（因河东岸）性价比往往更高，过桥步行到老城也就十分钟，却能享受到更开阔的河景和更本地化的氛围。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开帕绍好多天了，闭上眼睛，脑海里最先浮现的，不是某个具体的建筑，而是那三条河水的颜色——多瑙河的黄绿、因河的湛蓝、伊尔茨河的墨绿，它们在我记忆的画布上缓缓流动、交融。帕绍教会我的，是关于“交汇”的更深层意义。它不仅仅是地理上的奇迹，更是一种生活哲学的体现：不同的力量、不同的历史、不同的色彩，可以如此亲密地共存，彼此界定却又互相滋养，最终形成一种比单一纯粹更丰富、更动人的美丽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、崇尚直达目的地的时代，帕绍像是一个温柔的提醒。它告诉我们，有时候，最美的风景恰恰存在于“之间”的状态——陆地与河流之间，历史与当下之间，喧嚣与宁静之间。在这里，你不需要匆忙赶路，你的节奏会被水流自然地带慢。你可以花一个小时，什么也不做，就看河水如何流淌，看光影如何在巴洛克立面上移动。这种“无目的”的沉浸，恰恰是深度旅行最珍贵的馈赠。所以，如果你厌倦了打卡式的奔波，渴望一次能让心灵安静下来的旅程，请一定来帕绍。让这三条古老的河流，也洗去你心上的尘埃，带你找回那份凝视时光流逝的从容与感动。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/celle-half-timbered-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    策
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">策勒（五百座木骨架房屋之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Celle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/norcia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺奇古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Norcia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gubbio-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    古
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">古比奥古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gubbio Old Town</p>
                  </div>
                </div>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
