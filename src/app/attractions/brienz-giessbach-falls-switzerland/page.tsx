import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布里恩茨 Brienz｜木雕之乡与隐藏的瀑布仙境 - 最佳欧洲景点',
  description: '火车缓缓驶入布里恩茨站台，推开车门的一刹那，你就被一种混合着清澈湖水与湿润木头的气息包围了。那不是简单的清新，而是带着一丝甜意的凉，像咬了一口刚切开的青苹果。眼前的一切饱和度都被调高了——翡翠色的湖水温柔地拍打着岸边五彩的小船，背后是墨绿色的布里恩茨山像一堵巨墙拔地而起，山顶还戴着一顶未化的雪冠。而',
}

export default function BrienzGiessbachFallsSwitzerlandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞士', href: '/destinations/europe' },
            { label: '布里恩茨', href: '/destinations/europe' },
            { label: '布里恩茨', href: '/attractions/brienz-giessbach-falls-switzerland' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布里恩茨・Brienz・瑞士・布里恩茨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车缓缓驶入布里恩茨站台，推开车门的一刹那，你就被一种混合着清澈湖水与湿润木头的气息包围了。那不是简单的清新，而是带着一丝甜意的凉，像咬了一口刚切开的青苹果。眼前的一切饱和度都被调高了——翡翠色的湖水温柔地拍打着岸边五彩的小船，背后是墨绿色的布里恩茨山像一堵巨墙拔地而起，山顶还戴着一顶未化的雪冠。而最吸引眼球的，是那些沿着山坡错落有致的深棕色木屋，它们安静得仿佛是从童话插图里直接搬出来的，每一栋的阳台栏杆、窗框、屋檐下，都雕刻着繁复无比的花纹，卷曲的藤蔓、盛开的花朵、生动的动物，仿佛下一秒就要从木头的纹理里活过来。
顺着主街往下走，耳朵里渐渐充满了两种声音的交响：一是清脆而有节奏的“叮、叮、叮”声，从沿街作坊半开的门里传出来；二是远处低沉而持续的、仿佛大地在呼吸的轰鸣。前者是木雕匠人手中的刻刀与椴木的对话，后者则是隐藏在山林背后的吉斯巴赫瀑布永恒的吟唱。你会看到头发花白的老师傅戴着眼镜，对着一块木头精雕细琢，神态安详得如同在举行一场仪式；而街边的商店里，摆满了从憨态可掬的小熊到复杂无比的旋转木马音乐盒。这里的生活节奏，似乎就是用刻刀的节奏来丈量的，缓慢、专注，充满了手心的温度。
走到湖边码头，一切豁然开朗。湖水蓝绿得不像真的，几只天鹅悠闲地划开水波。对岸的山林浓密得化不开，而在那片浓绿之中，一道白练若隐若现，那就是吉斯巴赫瀑布。它不像那些声势浩大的瀑布急于宣示自己的存在，而是羞涩地藏在森林的褶皱里，需要你坐上一艘红色的老式蒸汽明轮桨船，或者沿着湖边小径慢慢探寻，才能窥见它的全貌。在这里，人类精湛的工艺之美与大自然鬼斧神工的壮丽之美，被这一湖碧水完美地缝合在了一起，毫无隔阂。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "火车缓缓驶入布里恩茨站台，推开车门的一刹那，你就被一种混合着清澈湖水与湿润木头的气息包围了。那不是简单的清新，而是带着一丝甜意的凉，像咬了一口刚切开的青苹果。眼前的一切饱和度都被调高了——翡翠色的湖水温柔地拍打着岸边五彩的小船，背后是墨绿色的布里恩茨山像一堵巨墙拔地而起，山顶还戴着一顶未化的雪冠。而最吸引眼球的，是那些沿着山坡错落有致的深棕色木屋，它们安静得仿佛是从童话插图里直接搬出来的，每一栋的阳台栏杆、窗框、屋檐下，都雕刻着繁复无比的花纹，卷曲的藤蔓、盛开的花朵、生动的动物，仿佛下一秒就要从木头的纹理里活过来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "顺着主街往下走，耳朵里渐渐充满了两种声音的交响：一是清脆而有节奏的“叮、叮、叮”声，从沿街作坊半开的门里传出来；二是远处低沉而持续的、仿佛大地在呼吸的轰鸣。前者是木雕匠人手中的刻刀与椴木的对话，后者则是隐藏在山林背后的吉斯巴赫瀑布永恒的吟唱。你会看到头发花白的老师傅戴着眼镜，对着一块木头精雕细琢，神态安详得如同在举行一场仪式；而街边的商店里，摆满了从憨态可掬的小熊到复杂无比的旋转木马音乐盒。这里的生活节奏，似乎就是用刻刀的节奏来丈量的，缓慢、专注，充满了手心的温度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走到湖边码头，一切豁然开朗。湖水蓝绿得不像真的，几只天鹅悠闲地划开水波。对岸的山林浓密得化不开，而在那片浓绿之中，一道白练若隐若现，那就是吉斯巴赫瀑布。它不像那些声势浩大的瀑布急于宣示自己的存在，而是羞涩地藏在森林的褶皱里，需要你坐上一艘红色的老式蒸汽明轮桨船，或者沿着湖边小径慢慢探寻，才能窥见它的全貌。在这里，人类精湛的工艺之美与大自然鬼斧神工的壮丽之美，被这一湖碧水完美地缝合在了一起，毫无隔阂。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布里恩茨`} />
                <InfoRow label="英文名称" value={`Brienz`} />
                <InfoRow label="正式名称" value={`Brienz`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`布里恩茨`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`瑞士木雕传统的守护者与阿尔卑斯湖畔的生活典范。`} />
                <InfoRow label="建筑特色" value={`遍布着装饰有精美木雕花纹的古老木屋，其阳台和窗棂本身就是艺术品。`} />
                <InfoRow label="建筑风格" value={`典型的伯尔尼高地传统木结构建筑风格。`} />
                <InfoRow label="文化价值" value={`活着的木雕工艺博物馆与阿尔卑斯自然崇拜的体现。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。布里恩茨木雕学校及博物馆开放时间为周一至周五 8:00-12:00， 13:30-17:00；周六 9:00-12:00（冬季或略有调整）。前往吉斯巴赫瀑布的登山步道及索道运营时间一般为每年4月中旬至10月下旬，每日8:30-18:00，具体需查询当日时刻表。冬季部分设施关闭。`} />
              <InfoRow label="门票价格" value={`进入布里恩茨小镇免费。木雕博物馆门票约8瑞士法郎。前往吉斯巴赫瀑布可乘坐布里恩茨湖游船（持瑞士旅行通票免费），吉斯巴赫索道往返票价约15瑞士法郎。建议购买地区交通联票以节省费用。`} />
              <InfoRow label="地址" value={`Brienz, 3855, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世机场出发最为便捷：在机场火车站直接乘坐IC（城际快车）前往因特拉肯东站（Interlaken Ost），车程约2小时，班次每小时一班。在因特拉肯东站换乘前往布里恩茨的R列车（布里恩茨湖线），这是一段风景绝美的沿湖铁路，约20分钟即可抵达布里恩茨火车站，班次密集。从伯尔尼火车站出发也有直达列车，约1小时。购票建议使用瑞士联邦铁路（SBB）官方App，可查询实时信息和购买电子票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布里恩茨的故事，是一段木头、湖水与斧凿声交织的漫长岁月。早在中世纪，这里就是穿越阿尔卑斯山的重要通道上的一个小小落脚点。陡峭的山坡和茂密的森林限制了农耕，却慷慨地赐予了无尽的木材资源。最初的居民靠伐木和简单的木工为生，制作的更多是实用的家具和农具。转机发生在十八世纪末，当欧洲的“壮游”之风开始兴起，那些穿越阿尔卑斯山前往意大利的贵族和文人，被这里的湖光山色震撼，开始在此停留。他们对精致手工艺品的需求，像一颗投入湖心的石子，彻底改变了布里恩茨的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "本地匠人们开始将技艺从实用转向艺术。他们不再只做木桶和椅子，而是雕刻起复杂的面具、宗教人物和装饰板。真正让布里恩茨木雕名扬天下的，是一位名叫克里斯蒂安·菲舍尔的木匠。十九世纪初，他创立了一所木雕学校，这简直是神来之笔。他系统化地传授技艺，将个人经验转化为可以传承的体系。从这所学校里走出的学徒，将布里恩茨的风格带到了瑞士各地，甚至远赴美国。小镇的主街上开始出现专门展示和销售木雕作品的商店，那些原本朴素的木屋外墙上，也开始被繁复的木雕装饰覆盖，家家户户仿佛都在进行一场无声的技艺竞赛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而吉斯巴赫瀑布，在很长一段时间里，只是本地人和少数冒险家才知道的秘密。十九世纪中叶，随着蒸汽船在布里恩茨湖上通航，瀑布的壮观才开始被更多游客发现。一位颇具远见的酒店老板在瀑布顶端建造了吉斯巴赫大酒店，最初只是为了接待那些不畏艰辛、徒步上山的勇敢旅人。没想到，这座宫殿般的酒店本身成了传奇，它接待过欧洲的皇室、作家和艺术家，瀑布的轰鸣成了他们窗外永恒的白噪音。为了保护这份自然遗产，很早就有人提议将周围区域划为保护区，这使吉斯巴赫避免了过度开发的命运，至今保持着一种野性而原始的魅力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二十世纪的旅游业发展，曾让布里恩茨面临抉择：是彻底商业化，还是守住根本？小镇选择了后者。木雕没有变成流水线上冰冷的产品，它依然是那需要数年学徒期才能掌握的手艺。木雕学校依然在招生，你可以看到十几岁的少年在那里学习最传统的刀法。与此同时，通往瀑布的古老登山步道被精心维护，现代化的索道也被巧妙地融入景观，只为让更多人能轻松领略自然奇观。今天的布里恩茨，就像一位从容的智者，它深知自己的魅力不在于喧嚣，而在于那刀尖下的专注、湖畔的宁静，以及山林深处永不间断的水流之歌。它是一种活着的传统，在阿尔卑斯山的怀抱里，不慌不忙地呼吸。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味布里恩茨，建议安排完整的一天，并在此住上一晚。上午抵达后，将重点放在小镇的木雕文化与湖畔漫步，这时光线柔和，作坊刚开门，匠人们精神饱满。午后，乘船或步行去探索吉斯巴赫瀑布，这是全天的高潮。傍晚返回小镇，享受湖边的宁静日落。这样的节奏张弛有度，既能深入人文内核，又能拥抱自然奇观，且完美避开了可能出现的午后旅行团人潮。如果你体力充沛，强烈推荐部分路段徒步，那才是打开阿尔卑斯山湖景的正确方式。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季是旅游旺季，如果想避开人潮，尽量选择工作日清晨前往吉斯巴赫瀑布。徒步瀑布步道请务必穿着防滑舒适的登山鞋，因为水汽会让木栈道和石头变得湿滑。小镇许多木雕作坊和博物馆午间有较长的休息时间，规划参观时请注意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一早从布里恩茨火车站出来，先别急着走，在站前广场深吸一口混合着木头清香的湖风，让自己慢下来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着 Brunngasse 这条被誉为“瑞士最美街道”的坡道缓缓上行，用手指触摸那些百年老屋窗台上被阳光晒得温热的精美木雕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开一两家木雕作坊虚掩的门，安静地看一会儿匠人工作，听刻刀划过木头的沙沙声，或许还能聊上几句。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到湖边的码头区，坐在长椅上看来往的红色蒸汽船拉响汽笛，看天鹅梳理羽毛，把小镇的倒影看进心里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在码头边的餐厅享用一顿简单的午餐，务必点一份湖里的鲜鱼，配着当地啤酒，看游船划开翡翠色的水面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘上那艘红色的怀旧蒸汽明轮桨船，在甲板上吹着风，看着小镇在视野中渐渐变小，朝着对岸山间那道白色的水痕驶去。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在吉斯巴赫码头下船，选择乘坐古老的索道缆车或沿着森林步道徒步上山，让瀑布的轰鸣声由远及近，最终将自己包裹在水雾之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在瀑布观景台的木桥上，感受扑面而来的细密水汽和震耳欲聋的声响，抬头看十四级瀑布如阶梯般从密林深处奔腾而下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 9 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分乘船或徒步返回，如果还有精力，去小镇后方的山坡徒步小径走一段，俯瞰夜幕降临前湖面与小镇的灯火次第亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`Brunngasse街道仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的斜阳最能勾勒出传统木屋立面上木雕的立体阴影，站在坡道下端向上拍摄，将蜿蜒的石板路和精美的窗棂一同收入镜中。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`布里恩茨湖码头全景`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，站在码头延伸至湖中的栈桥上，用广角镜头将彩色小屋、停泊的船只、湖面倒影和对岸的雪山一同定格，画面宁静而富有层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`吉斯巴赫瀑布多层观景台`}</h4>
                  <p className="text-sm text-gray-700">{`不必挤在最低的观景台，沿着步道向上走，在中段一个林木环绕的木平台，可以拍到瀑布中段如白练穿林的画面，且能避开大部分游客，构图更显幽深。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`木雕作坊工作特写`}</h4>
                  <p className="text-sm text-gray-700">{`征得同意后，在作坊窗边利用自然光拍摄匠人手持刻刀的特写，聚焦于那双布满痕迹却异常稳定的手，以及木屑飞舞的瞬间，故事感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`蒸汽船与瀑布同框`}</h4>
                  <p className="text-sm text-gray-700">{`在前往吉斯巴赫的游船甲板上，当船行至湖心偏瀑布方向时，用长焦镜头压缩空间，将红色的蒸汽船、翡翠湖面和远处白色的瀑布同框，构成经典的三重奏。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄木雕匠人时务必先微笑示意并获得许可，这是一种基本的尊重。瀑布区域水汽极大，务必为相机准备好专业的防水套或塑料袋，并随时擦拭镜头。清晨湖面常起薄雾，这是拍摄梦幻氛围的绝佳时机，不要因为天气朦胧而放弃出门。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔遗产木屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋有150年历史、阳台布满雕花的保护建筑木屋，房东老奶奶会为你准备家庭早餐，夜晚能听见清晰的湖水拍岸声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`吉斯巴赫瀑布酒店历史翼`}</h4>
                  <p className="text-sm text-green-800">{`直接住在瀑布顶端的传奇宫殿酒店里，选择历史翼的房间，推开窗就是震耳欲聋的瀑布全景，体验一把十九世纪贵族探险家的感觉。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`半山腰全景公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇后山，拥有可以俯瞰整个湖湾和小镇的宽阔露台，厨房设施齐全，适合家庭或好友，在星空下自己烹饪一顿晚餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感湖景精品酒店`}</h4>
                  <p className="text-sm text-purple-800">{`位于码头附近，由传统木结构建筑改造，内部是极简的北欧设计，巨大的落地窗将湖光山色变成你房间的一幅活画。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "吉斯巴赫瀑布酒店非常热门，尤其是历史翼的房间，必须提前数月预订。住在镇上虽然离瀑布稍远，但餐饮选择更多，夜生活（虽然也很安静）相对方便。无论住哪里，布里恩茨的夜晚都非常安全和宁静，可以放心散步。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开布里恩茨好些天了，但那有节奏的叮咚凿木声，和那仿佛来自地心深处的瀑布轰鸣，却常常在不经意间回到我的耳边。我发现，我想念的不仅仅是一处风景，更是一种完整的生活状态。在这里，美不是被供奉在玻璃展柜里的，而是活在匠人的指尖，活在每一扇需要亲手推开、会吱呀作响的木门上，活在那道需要你付出一点脚力去山林深处寻找的瀑布里。它毫不费力地诠释了何为“匠心”与“天成”的和谐共生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、一切都可以被快速复制的时代，布里恩茨的存在就像一个温柔的提醒。它告诉我们，有些价值必须用时间去打磨，有些风景必须用身心去抵达。那条最美的街道，那些让人惊叹的木雕，并非一日之功；那道隐藏的瀑布，也不会轻易向匆匆过客展露全部容颜。它邀请你慢下来，用一天的时间，去读懂一把刻刀的故事，去聆听一片山林的水语。当你这么做了，你带走的将不仅仅是照片，而是一种关于专注、传统与敬畏自然的持久回响。这，正是深度旅行所能馈赠的最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/morges-castle-tulip-festival" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫尔日</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Morges</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castles-of-bellinzona-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝林佐纳三城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castles of Bellinzona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bosco-gurin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博斯科古林</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bosco/Gurin</p>
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
