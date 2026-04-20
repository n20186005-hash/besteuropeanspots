import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥赫里德老城 Ohrid Old Town｜欧洲最古老人类住区之一，镶嵌在“欧洲巴哈马”蓝宝石湖畔的千年露天博物馆 - 最佳欧洲景点',
  description: '我得告诉你，第一眼看到奥赫里德老城，感觉不像“抵达”，更像“跌入”。不是地理意义上的坠落，而是感官上的沉溺。车子还在盘山公路上绕，一片难以置信的蓝就毫无预警地撞进眼里——那是奥赫里德湖，他们叫它“欧洲的巴哈马”。但比湖水更摄人心魄的，是紧贴着陡峭湖岸、密密麻麻从水边一直堆叠到山顶的那一片赭石色屋顶。...',
}

export default function OhridOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥赫里德老城', href: '/attractions/ohrid-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥赫里德老城・Ohrid Old Town・北马其顿・奥赫里德`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`我得告诉你，第一眼看到奥赫里德老城，感觉不像“抵达”，更像“跌入”。不是地理意义上的坠落，而是感官上的沉溺。车子还在盘山公路上绕，一片难以置信的蓝就毫无预警地撞进眼里——那是奥赫里德湖，他们叫它“欧洲的巴哈马”。但比湖水更摄人心魄的，是紧贴着陡峭湖岸、密密麻麻从水边一直堆叠到山顶的那一片赭石色屋顶。老城就那样栖息在山坡上，像一艘巨大、古老、满载故事的航船，永恒地停泊在时光的港湾里。
当你真的走进那些迷宫般的石板小巷，脚底传来的是几个世纪行人脚步打磨出的温润触感，有点滑，但很踏实。空气的味道是分层的：清晨是湖水清冽的湿气混杂着面包房飘出的焦香；午后，阳光炙烤着老石头，散发出干燥的、类似古籍的气味；傍晚时分，家家户户厨房里炖煮蔬菜和烤肉的香气，又会从那些爬满九重葛的院墙里袅袅钻出来。耳朵里灌满了声音——教堂浑厚的钟声定时敲响，与清真寺宣礼塔悠远的呼唤交织；小巷深处传来孩子踢足球的喧闹和老太太们坐在门廊上用马其顿语快节奏聊天的细碎声响。这里不是一座仅供参观的博物馆，它是一座依然蓬勃跳动的心脏，当地人买菜、遛狗、在湖里游泳、在咖啡馆里争论政治，他们的生活与千年的遗迹无缝衔接。
最打动人心的，是那种无处不在的“层叠感”。你会在一个15世纪的东正教教堂墙角，发现一块刻着古希腊文字的罗马柱础；奥斯曼时期的木结构老宅子，窗户正对着拜占庭风格的教堂圆顶；而你手里拿着的，可能是一杯意式浓缩咖啡。历史在这里不是按顺序书写的章节，而是同时播放的和弦。每一个转角都可能藏着一座不起眼的小教堂，推开吱呀作响的木门，里面是覆盖了整个穹顶的、色彩依然鲜艳的湿壁画，圣人的目光穿越数百年的尘埃，宁静地注视着你。这种在寻常巷陌与绝世瑰宝的不期而遇，是奥赫里德老城最奢侈的馈赠。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`我得告诉你，第一眼看到奥赫里德老城，感觉不像“抵达”，更像“跌入”。不是地理意义上的坠落，而是感官上的沉溺。车子还在盘山公路上绕，一片难以置信的蓝就毫无预警地撞进眼里——那是奥赫里德湖，他们叫它“欧洲的巴哈马”。但比湖水更摄人心魄的，是紧贴着陡峭湖岸、密密麻麻从水边一直堆叠到山顶的那一片赭石色屋顶。老城就那样栖息在山坡上，像一艘巨大、古老、满载故事的航船，永恒地停泊在时光的港湾里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你真的走进那些迷宫般的石板小巷，脚底传来的是几个世纪行人脚步打磨出的温润触感，有点滑，但很踏实。空气的味道是分层的：清晨是湖水清冽的湿气混杂着面包房飘出的焦香；午后，阳光炙烤着老石头，散发出干燥的、类似古籍的气味；傍晚时分，家家户户厨房里炖煮蔬菜和烤肉的香气，又会从那些爬满九重葛的院墙里袅袅钻出来。耳朵里灌满了声音——教堂浑厚的钟声定时敲响，与清真寺宣礼塔悠远的呼唤交织；小巷深处传来孩子踢足球的喧闹和老太太们坐在门廊上用马其顿语快节奏聊天的细碎声响。这里不是一座仅供参观的博物馆，它是一座依然蓬勃跳动的心脏，当地人买菜、遛狗、在湖里游泳、在咖啡馆里争论政治，他们的生活与千年的遗迹无缝衔接。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种无处不在的“层叠感”。你会在一个15世纪的东正教教堂墙角，发现一块刻着古希腊文字的罗马柱础；奥斯曼时期的木结构老宅子，窗户正对着拜占庭风格的教堂圆顶；而你手里拿着的，可能是一杯意式浓缩咖啡。历史在这里不是按顺序书写的章节，而是同时播放的和弦。每一个转角都可能藏着一座不起眼的小教堂，推开吱呀作响的木门，里面是覆盖了整个穹顶的、色彩依然鲜艳的湿壁画，圣人的目光穿越数百年的尘埃，宁静地注视着你。这种在寻常巷陌与绝世瑰宝的不期而遇，是奥赫里德老城最奢侈的馈赠。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥赫里德老城`} />
                <InfoRow label="英文名称" value={`Ohrid Old Town`} />
                <InfoRow label="正式名称" value={`Old Town of Ohrid`} />
                <InfoRow label="国家" value={`北马其顿`} />
                <InfoRow label="城市" value={`奥赫里德`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`被誉为“斯拉夫人的耶路撒冷”，是欧洲最古老的人类定居点之一和斯拉夫文化与东正教文明的摇篮。`} />
                <InfoRow label="建筑特色" value={`依陡峭山势层层错落而建的红瓦石屋，与碧蓝湖水和众多中世纪教堂尖顶构成和谐画卷，宛若立体的拜占庭镶嵌画。`} />
                <InfoRow label="建筑风格" value={`拜占庭、奥斯曼与马其顿本土民居风格的完美融合，形成独特的巴尔干山地滨湖建筑群。`} />
                <InfoRow label="文化价值" value={`拥有365座教堂（传说中一年每天一座）的宗教圣地，保存了西里尔字母创制初期的关键遗迹，是活着的文化层叠史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城本身是24小时开放的公共区域。但内部的各景点有独立开放时间：
圣约翰·卡内奥教堂：夏季（4月-10月）每天9:00-19:00；冬季（11月-3月）时间缩短，通常为10:00-17:00，且可能因天气临时关闭。
奥赫里德城堡：全年开放，夏季9:00-19:00，冬季9:00-16:00。
古剧场：全天可在外围参观，进入内部区域通常只在夏季有活动时开放。
众多教堂和博物馆：开放时间各异，普遍为9:00-17:00，许多在周一闭馆。
建议：游览前务必在游客中心或官网核对最新时间，北马其顿的许多景点开放时间较为随性。`} />
              <InfoRow label="门票价格" value={`进入老城街区本身免费。
各景点单独售票：
奥赫里德城堡：约120第纳尔（约2欧元）。
圣约翰·卡内奥教堂：约100第纳尔（约1.6欧元）。
圣索菲亚教堂：约100第纳尔。
国家博物馆（设在古城内）：约150第纳尔。
古剧场：外围免费，进入内部参加活动票价另计。
优惠政策：学生、儿童通常有折扣，但需出示证件。可以购买“奥赫里德一卡通”，涵盖多个主要景点，在游客中心有售，更划算。`} />
              <InfoRow label="地址" value={`Old Town, Ohrid 6000, North Macedonia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是奥赫里德圣保罗使徒机场（OHD），距离老城约10公里。
从机场出发：出租车是最方便的选择，车程15-20分钟，费用固定，约10-15欧元。暂无机场巴士。
从首都斯科普里出发：最佳方式是乘坐长途大巴，车程约3-3.5小时，沿途风景优美。大巴班次频繁，建议提前一天在斯科普里汽车站购票。大巴会停靠在奥赫里德新城的汽车站，从那里打车到老城约5分钟，或步行20-30分钟下坡即到。
自驾：可将车停在老城外的公共停车场（如靠近港口或古城门的停车场），老城内是迷宫般的狭窄石板路，仅供行人通行。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲奥赫里德的故事，我们得把时针拨回到连“马其顿”这个名字都还未出现的年代。早在公元前4世纪，古希腊人就在这里建立了名为“林克斯蒂斯”的城镇，它曾是马其顿王国的重要前沿。但你今天走在老城里，最能触摸到的古老脉搏，来自罗马。公元1世纪，罗马人沿着连接亚得里亚海和君士坦丁堡的“埃格纳蒂亚大道”来到这里，并赋予了它新的名字——“奥赫里杜姆”。古剧场就是那个时代的遗产。想象一下，两千年前，罗马公民和士兵就坐在这半圆形的石阶上，望着湖光山色，观看戏剧或角斗。如今，剧场依然在使用，只是上演的变成了现代音乐会和戏剧，历史的回音从未断绝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正奠定奥赫里德灵魂的，是拜占庭时代。当西罗马帝国崩塌，这里成为东罗马帝国（拜占庭）抵御斯拉夫人南下的坚固堡垒。有趣的是，堡垒最终成了熔炉。公元9世纪，两位来自萨洛尼卡的圣徒——西里尔和美多德，创造了最早的斯拉夫字母格拉哥里字母，为斯拉夫世界的文明启蒙点燃了火种。而他们的学生，圣克莱门特和圣瑙姆，被派到奥赫里德，将这把火烧成了燎原之势。克莱门特在这里建立了著名的奥赫里德文学学校，它不仅是宗教中心，更是斯拉夫世界第一所大学。他和瑙姆完善并推广了更简便的西里尔字母（没错，就是我们今天俄语等使用的字母），翻译了大量经文，让斯拉夫各民族拥有了用自己的语言书写的文明。那时的奥赫里德，学者云集，抄写员日夜不停地工作，成为了整个斯拉夫世界的“知识之都”和“精神灯塔”，号称拥有365座教堂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`辉煌难免遭受风雨。接下来的几个世纪，奥赫里德在保加利亚帝国、拜占庭复兴、塞尔维亚帝国之间反复易手，每一任主人都在这里留下了自己的印记。但最具颠覆性的改变发生在14世纪末，奥斯曼土耳其人的新月旗飘扬在了城堡上空。近五百年的奥斯曼统治，彻底改变了城市的面貌和肌理。许多教堂被改建成清真寺，比如宏伟的圣索菲亚教堂；曲折的巷弄间出现了带有突出木窗的奥斯曼风格宅邸、土耳其浴室和热闹的巴扎。然而，韧性就藏于其中。当地的基督徒巧妙地建造了许多“隐形”教堂——它们的地面部分很小，甚至低于街道，以规避奥斯曼关于基督教建筑不能高于清真寺的规定，但向下挖掘，却有着深邃的地下圣所和精美的壁画。信仰在压迫下以另一种形式深深扎根。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进20世纪，奥赫里德经历了两次巴尔干战争、两次世界大战，最终成为南斯拉夫联邦的一部分。铁托时代，它作为重要的历史文化名城和风景胜地得到了保护与发展。1991年北马其顿独立后，奥赫里德老城连同湖泊在1980年就被联合国教科文组织列为世界遗产，成为了国家名片。今天，你看到的这片红瓦屋顶下的宁静，是文明经历过无数次碰撞、征服、融合与重生后的结果。它不是一个单一的故事，而是一部用石头、壁画和信仰写成的，关于欧洲东部边疆的史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味奥赫里德老城，我强烈建议你留出一整天的时间，并穿上最舒适的运动鞋。最佳的游览节奏是“由湖至山，再由山归湖”。建议在清晨8点左右抵达，这时旅行团还未涌入，光线柔和，老城刚刚苏醒。从湖滨的码头区开始，沿着石板主路向上漫步，一路探索小巷和教堂，中午时分抵达山顶城堡，在此午餐并俯瞰全景。下午沿着另一侧更安静的小径下山，参观几处隐秘的景点，最后在日落前回到湖边，看夕阳将整座老城染成金色。这样的路线不仅顺地势而行，节省体力，更能完整地体验老城从世俗生活到精神高地，再回归宁静湖光的层次变化。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`老城石板路陡峭湿滑，务必穿防滑的平底鞋，高跟鞋在这里是“灾难级”选择。
许多小教堂内部禁止拍照（尤其是使用闪光灯），门口通常有标志，请务必遵守，这是对文化遗产和信仰的基本尊重。
夏季正午阳光非常强烈，且老城巷道狭窄通风有限，建议戴帽子和准备充足饮水，并利用中午最热的时间在城堡或咖啡馆里休息。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从湖畔的“船工广场”起步，摸摸那棵巨大的悬铃木，看早起的老人在长椅上读报，湖面渡轮划开平静的蓝色丝绸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着用巨大石板铺就的“主街”向上走，别怕迷路，随时钻进右手边任何一条吸引你的狭窄小巷，那里藏着开满鲜花的庭院和挂着蕾丝窗帘的古老窗棂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要推开圣索菲亚教堂那扇厚重的木门，让眼睛适应昏暗后，仰望那些11世纪的湿壁画上，庄严的基督与圣徒如何在金色背景中凝视众生。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向上攀登，在古剧场的古老石阶上坐下来喘口气，想象罗马时代这里的喧嚣，并透过剧场的拱形框架，拍下湖泊与城镇同框的绝佳画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`朝着山顶醒目的城堡旗帜前进，穿过城堡大门，沿着城墙走一圈，让360度的湖光山色与红色屋顶的海洋毫无保留地冲击你的视觉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时选择湖北侧更幽静的小路，寻找那座仿佛从岩石中长出来的圣约翰·卡内奥教堂，它矗立在悬崖之上，是奥赫里德明信片上的绝对主角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进老城腹地的“国家人类学博物馆”（Robevi家族宅邸），在这座精美的19世纪豪宅里，看看富商的生活，并透过它的露台获得一个观赏老城的独特私家视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到湖边，随便找一家湖畔餐厅的露天座位，点一条当地特产的“奥赫里德鳟鱼”，配一杯葡萄酒，等待灯光一点点亮起，将山上的老城点缀成星空下的宝石棋盘。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣约翰·卡内奥教堂悬崖下`}</h4>
                  <p className="text-sm text-gray-700">{`最佳时间是下午四点后，阳光从西面照亮教堂白色墙体。站在教堂正下方湖边的岩石或小路上，用广角镜头仰拍，将教堂、碧蓝湖水和天空一同纳入，极具视觉冲击力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`古剧场框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，阳光角度较低时。站在剧场最高一排座位，将剧场的石拱作为天然画框，焦点对准框内的奥赫里德湖和远处山峦，形成深邃的景深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡城墙俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时。沿着城堡北侧城墙行走，找到一个能将下方红色屋顶、圣约翰教堂和湖泊同时收入视角的位置，使用长焦镜头压缩空间，拍出老城层层叠叠、直泻入湖的壮丽全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Robevi家族宅邸露台`}</h4>
                  <p className="text-sm text-gray-700">{`午后时分。这个博物馆的露台相对小众，从这里可以平视老城建筑群的中段。构图时将古老的木窗或阳台栏杆作为前景，聚焦于对面屋瓦上生长的绿植和晾晒的衣物，捕捉老城的生活气息。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`湖面反光强烈，拍摄湖畔或水中教堂倒影时，建议使用偏振镜（CPL）来消除反光，让湖水更显湛蓝清澈。`}</li>
                <li>• {`尊重当地居民隐私，避免将镜头直接对准居民家的窗户或院内，如需拍摄人文题材，一个微笑和示意通常能换来友好的回应。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖边风情`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城边缘直接临湖的精品酒店或民宿，清晨推开窗就能跳进欧洲最清澈的湖水里游泳，晚上枕着温柔的波涛声入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`古城心脏`}</h4>
                  <p className="text-sm text-green-800">{`选择一栋由奥斯曼时期老宅改造的石屋民宿，住在厚实的石墙内感受冬暖夏凉的奇妙，在私家的种满鲜花的露台上享用房东准备的 homemade 早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐修静谧`}</h4>
                  <p className="text-sm text-yellow-800">{`住在老城上半部靠近城堡的安静区域，这里游客稀少，能体验到更像本地人的生活节奏，夜晚只有猫和教堂钟声相伴。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计美学`}</h4>
                  <p className="text-sm text-purple-800">{`位于老城入口附近的现代设计酒店，在保留了传统元素的同时提供极致的舒适，顶楼酒吧拥有观赏老城与湖泊全景的无敌视角。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿多以特色民宿和小型酒店为主，房间数量有限，尤其在夏季（7-8月）和重要节日期间非常紧俏，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`大部分老城住宿需要步行一段阶梯才能到达，行李搬运是挑战，建议轻装简行或选择提供行李搬运服务的住处。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥赫里德好些日子了，但我的脑海里还时常浮现那个画面：一个黄昏，我坐在湖边，看着对岸老城的灯火逐一亮起，倒映在墨水般的湖面上。那一刻我突然觉得，奥赫里德不像许多欧洲古城那样，仅仅是一个关于过去的、凝固的纪念碑。它更像一棵古老的树，根系深深地扎进罗马、拜占庭、斯拉夫、奥斯曼的层层土壤中，而树冠依然在当下茂盛地生长，开花结果——那些在巷子里追逐的孩子、湖边垂钓的老人、咖啡馆里畅谈的年轻人，就是它鲜活的枝叶。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快、追求新的时代，奥赫里德老城提供了一种罕见的“深时间”体验。它让你相信，文明的生命力不在于永远保持单一的原貌，而在于拥有包容变迁、吸收异质、并在断壁残垣上一次次重生的韧性。这里的每一块石头，每一幅褪色的壁画，甚至空气中混杂的香料与湖水气味，都在低声讲述着一个道理：最持久的美丽，源于层叠，而非单一；源于融合，而非隔绝。它或许没有巴黎的繁华或罗马的磅礴，但它拥有的那种沉静、深厚与浑然天成的诗意，足以让任何一颗渴望逃离浮光掠影的心，找到沉浸与安宁。这不仅仅是一次旅行打卡，更是一场与时间本身进行的、温柔而深刻的对话。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/durbuy-smallest-city-belgium" className="block group">
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
              <a href="/attractions/kru-evo-macedonia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克鲁舍沃</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kruševo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sigtuna-swedens-oldest-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    西
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">西格蒂纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sigtuna</p>
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
