import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塔尔图老城 Tartu Old Town｜“思想的摇篮”与北欧最小首都的大学城灵魂 - 最佳欧洲景点',
  description: '如果你问我塔尔图老城闻起来是什么味道，我会说，是秋天雨后潮湿的鹅卵石，混着街角面包房飘出的黑麦酸香，还有从古老砖缝里渗出的、属于书籍和思想的清冷空气。第一眼看到它，你可能会有点意外——它没有塔林老城那种童话般的戏剧性，也没有里加那种恢弘的艺术气息。它更像一个微微驼背、戴着眼镜的老教授，衣着朴素，但一...',
}

export default function TartuOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '爱沙尼亚', href: '/destinations/estonia' },
            { label: '塔尔图老城', href: '/attractions/tartu-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塔尔图老城・Tartu Old Town・爱沙尼亚・塔尔图`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你问我塔尔图老城闻起来是什么味道，我会说，是秋天雨后潮湿的鹅卵石，混着街角面包房飘出的黑麦酸香，还有从古老砖缝里渗出的、属于书籍和思想的清冷空气。第一眼看到它，你可能会有点意外——它没有塔林老城那种童话般的戏剧性，也没有里加那种恢弘的艺术气息。它更像一个微微驼背、戴着眼镜的老教授，衣着朴素，但一开口，就让你知道肚子里藏着整个宇宙。
走在市政厅广场（Raekoja plats）上，脚下是几个世纪来被无数鞋底打磨得温润发亮的石块。广场中心是那个著名的“情侣之吻”雕塑喷泉，学生们总爱坐在池边，或低声讨论，或只是静静看着鸽子起飞。阳光斜斜地打在周围那些柠檬黄、淡粉色、薄荷绿的新古典主义建筑立面上，光影在圆柱和窗楣间缓慢移动，时间在这里仿佛被调成了0.75倍速。你听不到喧嚣的旅游团喇叭声，耳边是爱沙尼亚语的轻声絮语、自行车铃铛的清脆响声，偶尔还有从某扇打开的窗里流出的手风琴练习曲。
这座老城的灵魂，毫无疑问是塔尔图大学。它不像一个封闭的象牙塔，而是完全溶解在城市的肌理里。你分不清哪里是大学，哪里是城市。书店、咖啡馆、二手唱片店、学生社团的海报栏，和那些挂着名牌的教授公寓门铃紧紧挨在一起。在托姆比亚山（Toomemägi）山脚的狭窄小巷里，你会突然撞见一座爬满常春藤的、摇摇欲坠的古老木屋，旁边可能就是一座极简主义的现代玻璃盒子——那是某个系的实验室。这种奇妙的混搭毫无违和感，因为它的一切都服务于一个核心：思想。这里最珍贵的景观不是某个金碧辉煌的大厅，而是树下长椅上捧着书沉思的年轻人，是咖啡馆里一场激动人心的激烈辩论。塔尔图老城的美，是一种内向的、智性的、带着书卷气的温柔。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你问我塔尔图老城闻起来是什么味道，我会说，是秋天雨后潮湿的鹅卵石，混着街角面包房飘出的黑麦酸香，还有从古老砖缝里渗出的、属于书籍和思想的清冷空气。第一眼看到它，你可能会有点意外——它没有塔林老城那种童话般的戏剧性，也没有里加那种恢弘的艺术气息。它更像一个微微驼背、戴着眼镜的老教授，衣着朴素，但一开口，就让你知道肚子里藏着整个宇宙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走在市政厅广场（Raekoja plats）上，脚下是几个世纪来被无数鞋底打磨得温润发亮的石块。广场中心是那个著名的“情侣之吻”雕塑喷泉，学生们总爱坐在池边，或低声讨论，或只是静静看着鸽子起飞。阳光斜斜地打在周围那些柠檬黄、淡粉色、薄荷绿的新古典主义建筑立面上，光影在圆柱和窗楣间缓慢移动，时间在这里仿佛被调成了0.75倍速。你听不到喧嚣的旅游团喇叭声，耳边是爱沙尼亚语的轻声絮语、自行车铃铛的清脆响声，偶尔还有从某扇打开的窗里流出的手风琴练习曲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座老城的灵魂，毫无疑问是塔尔图大学。它不像一个封闭的象牙塔，而是完全溶解在城市的肌理里。你分不清哪里是大学，哪里是城市。书店、咖啡馆、二手唱片店、学生社团的海报栏，和那些挂着名牌的教授公寓门铃紧紧挨在一起。在托姆比亚山（Toomemägi）山脚的狭窄小巷里，你会突然撞见一座爬满常春藤的、摇摇欲坠的古老木屋，旁边可能就是一座极简主义的现代玻璃盒子——那是某个系的实验室。这种奇妙的混搭毫无违和感，因为它的一切都服务于一个核心：思想。这里最珍贵的景观不是某个金碧辉煌的大厅，而是树下长椅上捧着书沉思的年轻人，是咖啡馆里一场激动人心的激烈辩论。塔尔图老城的美，是一种内向的、智性的、带着书卷气的温柔。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塔尔图老城`} />
                <InfoRow label="英文名称" value={`Tartu Old Town`} />
                <InfoRow label="正式名称" value={`Tartu Old Town`} />
                <InfoRow label="国家" value={`爱沙尼亚`} />
                <InfoRow label="城市" value={`塔尔图`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`爱沙尼亚的精神与文化首都，波罗的海地区最古老、最富盛名的大学城。`} />
                <InfoRow label="建筑特色" value={`新古典主义与色彩斑斓的木质建筑和谐并存，以倾斜的房屋、宁静的庭院和充满学术气息的广场为标志。`} />
                <InfoRow label="建筑风格" value={`以19世纪早期新古典主义风格为主导，混搭了北欧传统的木结构建筑和苏联时期的实用主义风格。`} />
                <InfoRow label="文化价值" value={`这里是爱沙尼亚民族觉醒的摇篮，其大学塑造了整个国家的知识精英与民族认同。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`整个老城区为24小时开放公共区域。内部的主要景点如塔尔图大学主楼、塔尔图艺术博物馆、玩具博物馆等开放时间各不相同，一般为周二至周日10:00-18:00，周一闭馆。夏季（5月至9月）部分景点会延长开放至晚上8点。市政厅内部仅在特定导览日开放，需提前查询。冬季（11月至次年3月）户外广场的圣诞市场会开放，夜晚灯光璀璨。`} />
              <InfoRow label="门票价格" value={`漫步老城本身免费。主要室内景点需购票：塔尔图大学历史博物馆（包括主楼经典大厅）成人约8欧元，学生4欧元；塔尔图艺术博物馆成人约8欧元；玩具博物馆成人约6欧元。购买塔尔图城市卡（Tartu Card）可在指定时间内无限次乘坐公共交通并免费进入多个博物馆，24小时卡约15欧元，48小时卡约20欧元，官网可订。`} />
              <InfoRow label="地址" value={`Tartu Old Town, 51003 Tartu, Estonia`} />
              <InfoRow label="交通方式" value={`从塔林（Tallinn）出发最方便。火车：从塔林中央火车站（Balti jaam）搭乘开往塔尔图的列车，车程约2小时，班次频繁，每小时至少一班，可在Eesti Liinirongid官网或车站购票，推荐提前购票以确保座位。巴士：从塔林中央巴士站（Tallinna bussijaam）出发，车程约2.5小时，Lux Express等公司运营，班次极多，舒适度高，可在线或现场购票。抵达塔尔图巴士/火车站后，老城核心区就在步行15分钟的范围内，拖着行李可搭乘市内公交或打车（Bolt应用很方便）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`塔尔图的故事，是一部不断被摧毁又不断重生的坚韧史诗。早在公元5世纪，爱沙尼亚原住民就在如今的托姆比亚山丘上建立了定居点。但真正让它登上历史舞台的，是13世纪初的条顿骑士团。他们征服了这里，并给它起了个德国名字“多尔帕特”（Dorpat），还在山上用石头建起了坚固的主教城堡。这座城堡成为了利沃尼亚地区重要的宗教与军事中心，山下的城镇也逐渐繁荣，加入了汉萨同盟，商人、工匠和学者开始汇聚于此。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，平静总是短暂。16世纪末，立窝尼亚战争的风暴席卷而来，俄罗斯沙皇伊凡雷帝的军队几乎将整座城市夷为平地。大学和城市的命运，在一次偶然的捐赠中迎来了转机。17世纪初，瑞典国王古斯塔夫二世·阿道夫曾雄心勃勃地计划在此建立一所大学，但战乱让计划搁浅。直到近两百年后的1802年，在俄罗斯帝国沙皇亚历山大一世的支持下，塔尔图大学（当时称多尔帕特大学）才正式重新成立。这不是一次简单的复建，而是一次充满远见的创举。大学被赋予了极高的自治权，教学语言定为德语，这吸引了当时整个德语世界最顶尖的学者——包括后来提出“胚胎重演律”的生物学家卡尔·恩斯特·冯·贝尔。一时间，这座偏远的波罗的海小城成了欧洲科学地图上一颗耀眼的新星，老城里回荡着德语、爱沙尼亚语、俄语和拉丁语，知识的光芒第一次如此强烈地照亮这里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪中期，一场被称为“民族觉醒”的文化运动在这里悄然萌发。塔尔图大学的学生和教授们，成为了爱沙尼亚民族意识最积极的培育者。他们收集民间诗歌，研究爱沙尼亚语言，出版民族报刊。老城的印刷所里，机器日夜不停地运转，印刷着塑造一个民族灵魂的文本。正是从这里出发，爱沙尼亚人第一次清晰地认识到“我们是谁”。到了19世纪末20世纪初，老城的建筑面貌也迎来了它的黄金时代，我们今天看到的市政厅广场周围那些优雅匀称的新古典主义建筑群，大多是在那个时期修建或重建的，它们取代了更早期的木屋，赋予了城市一种理性而宁静的秩序感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但二十世纪的苦难并未放过它。两次世界大战的硝烟，尤其是二战末期苏军的猛烈轰炸，再次让老城伤痕累累。苏联时期，大量新移民涌入，城市被工业化，许多历史建筑被忽视，甚至面临拆除风险。然而，就像野火烧过的草原，生命的根茎从未真正死去。知识分子们在地下沙龙聚会，在大学的走廊里传递着禁书。1991年爱沙尼亚恢复独立后，塔尔图老城迎来了一场缓慢而精细的“文艺复兴”。人们没有选择推倒重建，而是小心翼翼地修复那些残存的木屋，清洗那些被煤烟熏黑的立面，让倾斜屋不再继续倾斜。他们做的，不是制造一个旅游盆景，而是修复一个可以继续生活、继续思考的家园。今天，当你看到古老庭院里举办的现代艺术展，听到苏联时代的工厂厂房里传来的科技公司键盘声，你就明白，这座老城的生命力，就在于它总能将历史的层积转化为面向未来的养分。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受塔尔图的脉搏，我建议你至少留出一整天的时间。早上九点左右抵达老城最佳，这时晨雾刚散，阳光温柔，学生们赶着去上课，整个城市刚刚苏醒，充满活力。你可以从市政厅广场开始，由“心脏”向外围和“大脑”（大学区）辐射，最后在托姆比亚山的宁静绿意中结束日间的探索。傍晚则是感受老城另一种魅力的黄金时间，建议留给河边和那些隐秘的庭院。这样的节奏张弛有度，既能捕捉到学术之城白日的理性光辉，也能体验到它入夜后的人文温度。全程步行即可，记得穿一双绝对舒适的鞋，因为鹅卵石路面虽然美丽，但对脚踝是个考验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季的周末广场上常有市集或音乐活动，虽然热闹，但也意味着人流较多，喜欢清静的话可以绕开主广场，探索东侧更居民区的小街巷。
冬季来访务必做好防寒防滑准备，爱沙尼亚的冬天漫长而寒冷，老城的鹅卵石路覆上冰雪后会非常滑，一双防水防滑的靴子是必需品。
当地人对私人空间很尊重，拍摄居民楼门窗或庭院内部前，最好先征得同意，尤其是在那些宁静的住宅区小巷里。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从市政厅广场的“情侣之吻”喷泉开始，用手感受一下清凉的泉水，然后静静观察广场四周那些色彩柔和的新古典主义建筑立面在晨光中的变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要推开塔尔图大学主楼（University of Tartu Main Building）那扇厚重的木门，爬上华丽的白色楼梯，仰望天花板上那幅名为《被逐出天堂》的恢弘壁画，感受知识与启蒙的庄严氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主楼出来后，径直走向它身后的托姆比亚山，沿着蜿蜒的林间小径登上山顶的古老教堂废墟（Toome Hill），站在残垣断壁间俯瞰红屋顶的老城全貌与蜿蜒的埃马约吉河。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，去寻找那座著名的“倾斜屋”（The Leaning House），站在它对面的小桥上，看这座黄白相间的艺术博物馆如何以一种顽皮又优雅的姿态挑战着地心引力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后钻进Lossi街附近那些迷宫般的后院与小巷，比如“天使桥”（Inglisild）与“魔鬼桥”（Kuradisild）之间的区域，你会发现被藤蔓覆盖的安静庭院、小巧的画廊和飘着咖啡香的学生书店。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把下午的时光留给塔尔图大学艺术博物馆（Tartu University Art Museum）或爱沙尼亚国家博物馆（位于老城郊区，需短途公交，但绝对值得），深入了解这片土地的精神世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，沿着埃马约吉河（Emajõgi River）漫步，从“彩虹桥”（Võidujooksusild）一路走到“市场桥”（Turu-sild），看夕阳将河水染成金色，当地人在岸边跑步、遛狗、约会。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后再次回到夜幕下的市政厅广场，看古老的街灯亮起，在广场边的咖啡馆（比如Werner Café）找个靠窗位置，点一杯本地啤酒或热可可，看夜晚的老城如何褪去学究气，换上慵懒迷人的面孔。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`倾斜屋全景`}</h4>
                  <p className="text-sm text-gray-700">{`站在艺术博物馆对面、横跨小河的“大学桥”（Ülikooli sild）上，下午三四点的侧光能完美勾勒出房屋倾斜的戏剧性线条与水中倒影，用广角镜头可以纳入周围的绿树与古典建筑背景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`托姆比亚山教堂废墟俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登上托姆比亚山顶的教堂废墟城墙，用中长焦镜头在日落前半小时拍摄，可以压缩老城红屋顶的层次，将市政厅的尖塔、大学的主楼圆顶与蜿蜒的河流一同框进取景框，画面富有故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“天使桥”下的拱门光影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，当阳光低角度照射时，站在“天使桥”的拱门下，朝着“魔鬼桥”的方向拍摄，桥拱形成完美的天然画框，框住远处绿树掩映中的古老建筑和行人，光影对比强烈，氛围宁静。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣约翰教堂红砖细节`}</h4>
                  <p className="text-sm text-gray-700">{`走近圣约翰教堂（St. John‘s Church），将镜头对准其外墙上那一千多个形态各异的赤陶土雕塑（Terracotta Sculptures），利用上午的柔光，拍摄它们的特写，这些历经战火幸存的中世纪人像面孔极具沧桑感和艺术价值。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`市政厅广场的夜与昼`}</h4>
                  <p className="text-sm text-gray-700">{`在广场东南角的“塔尔图游客中心”门口，架起三脚架，进行长时间曝光拍摄，夜晚可以拍下车灯在湿漉漉的鹅卵石地面上拉出的光轨与暖黄色灯光下的建筑轮廓；白天则可以捕捉广场上人流如织的动态模糊与静态建筑的对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`爱沙尼亚的“蓝色时刻”（日落后的深蓝色天光）持续时间很长，尤其在夏秋季节，这是拍摄老城建筑灯光与天际线融合的绝佳时机，能拍出冷峻而魔幻的北欧氛围。`}</li>
                <li>• {`许多室内景点（如大学主楼大厅）允许拍照但禁止使用闪光灯和三脚架，请务必遵守规定，高感光度相机或大光圈镜头在这里会很有用。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`学生之选与社交天堂`}</h4>
                  <p className="text-sm text-blue-800">{`位于老城核心的“塔尔图中央青年旅舍”（Tartu Central Hostel），由老建筑改造，公共区域宽敞，常有国际学生和背包客聚集，是获取一手本地信息和结交旅伴的绝佳地点。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计感与历史交融`}</h4>
                  <p className="text-sm text-green-800">{`藏在市政厅广场附近安静小巷里的“Pallas艺术酒店”（Hotel Pallas by Tartuhotels），酒店本身就像一个小型画廊，房间设计简约现代，部分房间能瞥见广场风景，下楼就是最热闹的地带。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`沉浸式历史体验`}</h4>
                  <p className="text-sm text-yellow-800">{`“伦敦酒店”（Hotel London）是一座19世纪的历史建筑，内部保留了古典的装饰风格，高挑的天花板、古董家具和深色木质楼梯，让你感觉住进了一部欧洲老电影，位置就在主广场旁。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端静谧之选`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在托姆比亚山脚下、埃马约吉河畔的“V Spa & Conference Hotel”，虽然步行至老城中心需10分钟，但拥有绝美的河景与山景客房、现代化的水疗中心，适合追求宁静和舒适度的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`每年五月的学生节和七月的歌舞节期间，全城住宿会非常紧张且价格上涨，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿多以精品酒店和历史建筑改造的旅馆为主，隔音可能不如现代建筑，对睡眠环境要求极高的游客可以选择河对岸稍远但更新更安静的酒店。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开塔尔图好些日子了，我脑海里最常浮现的，不是某个具体的建筑或画面，而是一种感觉。那是一种混合着咖啡香、旧书页、潮湿空气和年轻思绪的独特氛围。在这个被很多人匆匆略过、作为塔林中转站的小城里，我找到了现代旅行中越来越稀缺的东西——一种允许你停下来、慢下来、甚至发会儿呆的从容。它没有拼命向你展示什么，只是静静地在那里，过着自己的生活，思考着自己的问题。这种不张扬的自信，恰恰来自于它深厚的内核。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个一切追求效率、浮华与即时满足的世界里，塔尔图老城像一座精神的孤岛。它提醒着我们，一座城市的伟大，不仅可以由摩天大楼的高度来衡量，更可以由思想的深度和文化的韧性来定义。这里的一砖一瓦，一草一木，都浸透着对知识的尊重，对历史的诚实，以及对未来的平静期盼。它告诉你，真正的力量，往往存在于安静的沉思、持续的对话和对自身根源的深刻理解之中。对于任何一位厌倦了景点打卡、渴望在旅途中进行一场温和而深刻对话的旅人来说，塔尔图老城都不是一个目的地，而是一次回归——回归到阅读、漫步、观察与思考本身。这大概就是为什么，我会把它列为我心中最值得反复探访的欧洲角落之一。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/durbuy-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪尔比</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Durbuy</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/old-town-presov" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普雷绍夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Old Town of Prešov</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/korcula-old-town-marco-polo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔丘拉岛（马可波罗故乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Korčula</p>
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
