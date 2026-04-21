import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿莱奇冰川 Aletsch Glacier｜探访欧洲最大白色冰河的震撼史诗 - 最佳欧洲景点',
  description: '朋友，想象一下，当你喘着气爬上最后一段山道，转过那个岩石的拐角，整个世界在脚下豁然打开——那不是风景，那是一种绝对的、令人失语的“存在”。首先冲击你的是那片无边无际的、带着淡淡蓝光的白色。那不是雪地那种松软的白色，而是一种厚重的、像凝固的浪涛又像巨兽脊背的白色，从三座海拔超过4000米的巍峨山峰（少...',
}

export default function AletschGlacierPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '瑞士', href: '/destinations/switzerland' },
            { label: '阿莱奇冰川', href: '/attractions/aletsch-glacier' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿莱奇冰川・Aletsch Glacier・瑞士・瓦莱州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当你喘着气爬上最后一段山道，转过那个岩石的拐角，整个世界在脚下豁然打开——那不是风景，那是一种绝对的、令人失语的“存在”。首先冲击你的是那片无边无际的、带着淡淡蓝光的白色。那不是雪地那种松软的白色，而是一种厚重的、像凝固的浪涛又像巨兽脊背的白色，从三座海拔超过4000米的巍峨山峰（少女峰、僧侣峰、艾格峰）之间奔涌而出，以一种你无法想象的缓慢与坚定，蜿蜒着填满了整个山谷。这就是阿莱奇冰川给你的第一眼，不是美，是威严。
紧接着，是声音。或者说是“寂静”。在海拔近3000米的观景台上，风呼呼地吹过耳畔，但你仿佛能“听”到脚下那条23公里长的冰河在移动。那不是真的声响，是它在万年时光里跋涉所携带的无声频率，通过脚下岩石的震动，通过冰冷的空气，直接传递到你的胸腔里。偶尔，远处会传来一声闷雷般的轰鸣，那是冰川内部结构调整或边缘发生冰崩的声音，提醒你，这看似静止的庞然大物，其实活着，在呼吸，在以每年几十米的速度，向着山谷下游“流淌”。
你很快会发现，这片冰川绝非荒芜之地。在它两侧被阳光照到的岩壁上，生命力顽强的阿尔卑斯野花——龙胆、雪绒花，正星星点点地开放。早起的土拨鼠在岩石间窸窣跑过。而最动人的是，你会发现这里不只是游客的圣地。在缆车站，你会遇到扛着专业器材、面色红润的瑞士地质学家，他们像探望老友一样定期来为冰川“体检”；也会碰到当地的老爷爷，指着冰川末端那片明显退缩的砾石地带，用带着浓重口音的英语对孙子讲述他小时候冰川还在更下方的故事。在这里，冰川不是画册里的图片，它是邻人，是家园的界碑，是活在每个人记忆和忧虑里的真实存在。
它的核心魅力，正在于这种极致的矛盾与统一。它是如此强大，塑造了阿尔卑斯的面貌；却又如此脆弱，成为全球变暖最敏感的指示器。它代表着地球狂野的过去，也预言着我们共同的未来。站在它面前，你感受到的不仅是自然的壮丽，更是一种深切的时间感和身为人类一份子的责任感。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，当你喘着气爬上最后一段山道，转过那个岩石的拐角，整个世界在脚下豁然打开——那不是风景，那是一种绝对的、令人失语的“存在”。首先冲击你的是那片无边无际的、带着淡淡蓝光的白色。那不是雪地那种松软的白色，而是一种厚重的、像凝固的浪涛又像巨兽脊背的白色，从三座海拔超过4000米的巍峨山峰（少女峰、僧侣峰、艾格峰）之间奔涌而出，以一种你无法想象的缓慢与坚定，蜿蜒着填满了整个山谷。这就是阿莱奇冰川给你的第一眼，不是美，是威严。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`紧接着，是声音。或者说是“寂静”。在海拔近3000米的观景台上，风呼呼地吹过耳畔，但你仿佛能“听”到脚下那条23公里长的冰河在移动。那不是真的声响，是它在万年时光里跋涉所携带的无声频率，通过脚下岩石的震动，通过冰冷的空气，直接传递到你的胸腔里。偶尔，远处会传来一声闷雷般的轰鸣，那是冰川内部结构调整或边缘发生冰崩的声音，提醒你，这看似静止的庞然大物，其实活着，在呼吸，在以每年几十米的速度，向着山谷下游“流淌”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这片冰川绝非荒芜之地。在它两侧被阳光照到的岩壁上，生命力顽强的阿尔卑斯野花——龙胆、雪绒花，正星星点点地开放。早起的土拨鼠在岩石间窸窣跑过。而最动人的是，你会发现这里不只是游客的圣地。在缆车站，你会遇到扛着专业器材、面色红润的瑞士地质学家，他们像探望老友一样定期来为冰川“体检”；也会碰到当地的老爷爷，指着冰川末端那片明显退缩的砾石地带，用带着浓重口音的英语对孙子讲述他小时候冰川还在更下方的故事。在这里，冰川不是画册里的图片，它是邻人，是家园的界碑，是活在每个人记忆和忧虑里的真实存在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，正在于这种极致的矛盾与统一。它是如此强大，塑造了阿尔卑斯的面貌；却又如此脆弱，成为全球变暖最敏感的指示器。它代表着地球狂野的过去，也预言着我们共同的未来。站在它面前，你感受到的不仅是自然的壮丽，更是一种深切的时间感和身为人类一份子的责任感。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿莱奇冰川`} />
                <InfoRow label="英文名称" value={`Aletsch Glacier`} />
                <InfoRow label="正式名称" value={`Aletsch Glacier`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`瓦莱州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`阿尔卑斯山的心脏与地标，是欧洲冰河时代最宏伟的现存遗迹和气候变化的活体纪念碑。`} />
                <InfoRow label="建筑特色" value={`这不是人为建筑，而是大自然以万年为单位的杰作——一条由压实冰雪构成的、布满深邃裂隙和冰塔的流动晶体河流。`} />
                <InfoRow label="建筑风格" value={`自然形成的冰河地貌，呈现力量与脆弱并存的极简主义风格。`} />
                <InfoRow label="文化价值" value={`它不仅是瑞士的国家象征和世界自然遗产，更是全人类观察地球气候变迁、反思自身与自然关系的无字天书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`冰川本身为24小时开放的自然区域。但前往主要观景点的登山缆车和火车有运营时间，通常为每年六月上旬至十月中旬，每日约早上8:30至下午5:00运行，具体时间随季节微调；冬季（约十二月至四月）部分线路开放，供滑雪和雪鞋徒步。强烈建议出行前查询当年最新时刻表。山区天气多变，恶劣天气下缆车可能停运。`} />
              <InfoRow label="门票价格" value={`进入冰川区域本身免费。但前往观景点的公共交通需购票：从菲斯普（Fiesch）或贝腾（Bettmeralp）乘坐缆车往返票价约为35-45瑞士法郎（具体因路线和季节而异）。持有瑞士旅行通票（Swiss Travel Pass）可享受折扣。部分徒步小径可能会收取少量维护费（约5瑞士法郎），通常为自愿捐赠。`} />
              <InfoRow label="地址" value={`Aletsch Glacier, 3984 Fiesch, Switzerland`} />
              <InfoRow label="交通方式" value={`从日内瓦或苏黎世机场出发，乘坐瑞士联邦铁路（SBB）火车前往菲斯普（Fiesch）火车站，全程约3-3.5小时，需在布里格（Brig）换乘支线火车。火车班次频繁，每小时至少一班，准点率高，建议通过SBB官方App购票。抵达菲斯普站后，出站步行3分钟即可到达菲斯普-费施（Fiesch-Fiescheralp）缆车站，乘坐缆车约10分钟抵达费施阿尔卑（Fiescheralp），再换乘吊椅缆车约5分钟到达埃基斯峰（Eggishorn）观景台。这是俯瞰冰川全景最经典的路线。全程衔接顺畅，路标清晰。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲阿莱奇冰川的故事，我们得把时钟拨回遥远的末次冰盛期，大约两万多年前。那时，整个阿尔卑斯山脉被一个巨大的冰盖笼罩，我们今天看到的山谷，都是当年那些脾气暴躁的“冰巨人”用身体硬生生犁出来的。后来，气候转暖，大冰盖收缩，退守到高高的山脊和深谷中，形成了独立的冰川。阿莱奇，就是其中最大、最长寿的那一条。它像一条沉睡的银龙，盘踞在伯尔尼高地与瓦莱州交界的屋脊上，它的“源头”——广阔的冰雪积累区，就位于欧洲之巅少女峰脚下。千百年来，它只是当地牧民和猎人口中一个既敬畏又依赖的存在：夏天，它融化的冰水滋养草场；冬天，它是难以逾越的屏障。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的“发现史”，与欧洲人的探险精神和科学启蒙紧紧相连。18世纪末19世纪初，随着阿尔卑斯登山黄金时代的到来，那些穿着粗呢外套、带着简陋冰镐的英国绅士和瑞士先驱们，开始试图征服周边的山峰。当他们站上芬斯特拉尔霍恩峰或埃基斯峰时，阿莱奇冰川那完整而惊人的全貌才第一次被人类系统地观察和记录。地质学家们为之疯狂，他们意识到，这流动的冰体是解读地球历史的钥匙。1864年，瑞士自然研究协会甚至组织了一次大型科学考察，学者们冒着生命危险深入冰裂隙地带测量、绘图，阿莱奇冰川从此成为冰川学的“标准样本”和露天实验室。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，与人类的“蜜月期”并未持续太久。工业革命的浓烟尚未直接飘到这里，但整个星球的体温已经开始微妙上升。大约从1850年（也就是小冰期结束）以来，阿莱奇冰川就踏上了漫长的、不可逆转的退却之路。观测数据冰冷而残酷：它的末端已经后退了超过3公里，厚度变薄了数百米。如果你对比一下19世纪的老照片和现在的样子，那种失去的速度会让你心头发紧。当地的山谷里，立着许多标示着“冰川曾至此”年份的牌子，它们像一道道墓碑，记录着消失的体积。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入21世纪，阿莱奇冰川的故事增添了强烈的警示色彩。2001年，联合国教科文组织将它与周边的少女峰-阿莱奇地区一起列入世界自然遗产名录，赞誉它是“阿尔卑斯高山-冰川地貌的杰出典范”。但这份荣誉背后是深深的忧虑：如果全球变暖按当前趋势发展，到本世纪末，这条伟大的冰河可能会消失大部分。科学家们在它身上布设了最先进的监测网络，每一寸退缩都被精确记录。它不再只是一处风景，它成了地球的体温计，向每一个来访者无声地诉说。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，当你凝视它，你看到的不再仅仅是自然奇观。你看到的是一部用冰写就的地球编年史，是一曲关于力量与消逝的宏大交响，也是一封来自我们星球未来的、急迫的求援信。它的每一道褶皱里，都藏着过去；它边缘每一滴融水里，都映照着未来。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要深度体验阿莱奇冰川，我强烈推荐安排一整天时间，并选择从菲斯普（Fiesch）上山的经典“全景路线”。务必选择晴朗的清晨出发，因为上午的光线最适合观赏和拍照，且山区午后容易起雾或积云。整体节奏应该是“先宏观震撼，再中景亲近，最后微观感受”。早上乘最早一班缆车直达埃基斯峰观景台，独享冰川全景；随后下到费施阿尔卑，沿着山脊徒步小径近距离平视冰川；下午可以选择一条相对轻松的冰川边缘小径，感受高山植物和静谧；最后在夕阳时分回到观景台，看金光染上冰河与群峰。这样的安排能让你从不同维度、不同光线下，全方位理解这条冰川的灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着防滑耐磨的登山鞋，山区小径多碎石，普通运动鞋极易滑倒并损伤脚踝。即使是盛夏，高海拔处风大且温度可能骤降，必须携带防风外套、帽子甚至手套。不要试图在没有专业向导和装备的情况下接近冰川边缘或进入冰裂隙区，极其危险。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`搭乘清晨第一班缆车冲向埃基斯峰顶，在几乎无人的观景台上迎接第一缕阳光将少女峰和整条冰川染成金红色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着山脊上那条清晰的徒步小径向西漫步，从一个又一个天然观景平台平视冰川中段那波澜壮阔的冰瀑和深邃的冰裂隙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在费施阿尔卑的高山小屋露台坐下来，点一杯热巧克力，面对着冰川像面对一片凝固的海洋，静静观察光影在冰面上的移动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着标志清晰的“冰川小径”下行一段，走到一个可以清晰听到融水潺潺的溪流边，亲手触摸那源自万古寒冰的刺骨水流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访位于莫斯夫卢（Moosefluh）附近的“世界自然遗产解说中心”，通过互动展览了解冰川的形成、退缩以及背后的气候科学。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许且有向导陪同，可以尝试参加短程的冰川表面徒步（绝对不要自行尝试），站在那亿万吨蓝冰之上感受脚下地球的脉动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在返程缆车上，再次回望那条在暮色中泛着幽蓝光芒的白色巨蟒，将这份震撼深深刻入记忆。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`埃基斯峰观景台东侧边缘`}</h4>
                  <p className="text-sm text-gray-700">{`日出时分，利用长焦镜头压缩空间，将远方金色的少女峰、中景的冰川冰瀑和前景的岩石剪影一同纳入画面，营造史诗感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从费施阿尔卑前往马雷勒（Märjelen）湖的山径拐弯处`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光正好照亮冰川主体，可以拍摄到冰川注入冰蚀湖的经典场景，湖水的深蓝与冰川的洁白形成强烈对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`莫斯夫卢缆车站下方的岩石平台`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时，适合拍摄冰川表面细腻的纹理和深邃的蓝绿色调，可以尝试加入徒步者的小小身影作为比例参照，凸显冰川的宏大。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`贝腾阿尔卑（Bettmeralp）村庄边缘的草坡`}</h4>
                  <p className="text-sm text-gray-700">{`日落前最后一小时，柔和的金光洒满整个山谷，以村庄的木屋和野花为前景，拍摄冰川与阿尔卑斯山村的和谐共生之景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`冰川反光强烈，建议携带偏振镜（CPL）来消除冰面反光、增强蓝天和冰的蓝色饱和度。广角镜头用于表现辽阔，但一定要有吸引人的前景（如岩石、野花）；长焦镜头则能捕捉冰塔、裂隙的细节和地质力量感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`高山情怀之选`}</h4>
                  <p className="text-sm text-blue-800">{`费施阿尔卑或贝腾阿尔卑村中那些用松木建造的家庭式高山旅馆，推开窗就是连绵雪峰，晚上可以围着火炉听老板讲山里的传说。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`便捷交通之选`}</h4>
                  <p className="text-sm text-green-800">{`菲斯普小镇火车站附近的舒适酒店，对于赶早班缆车极其方便，小镇氛围宁静，晚上可以品尝瓦莱州特色的奶酪火锅。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`独特野奢体验`}</h4>
                  <p className="text-sm text-yellow-800">{`预订高山徒步路径上的山屋（如Konkordia Hut），虽然条件简朴（通铺），但能体验真正的阿尔卑斯登山文化，夜晚的星空和清晨的寂静无与伦比。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端度假之选`}</h4>
                  <p className="text-sm text-purple-800">{`邻近的莱克（Riederalp）无车村庄里的五星级度假酒店，提供水疗和全景餐厅，将冰川的壮美与极致舒适完美结合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`高山村庄的住宿在夏季徒步季和冬季滑雪季非常紧俏，务必提前数月预订。山区旅馆大多包含丰盛的半膳（早餐和晚餐），这是补充徒步消耗体力的关键。即使是夏季，房间内也通常有暖气，但很少安装空调，夜晚凉爽需盖厚被。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿莱奇冰川好多天了，但闭上眼，那片浩瀚的白色依然清晰地映在脑海里。它给我的触动，远远超出了一次视觉上的“打卡”成功。在那一刻，我真正理解了什么叫“地质时间”——我们人类短短百年的生命，在冰川万年的流动与千年的退缩面前，不过是倏忽一瞬。这种认知并非让人沮丧，反而带来一种奇特的平静。它让你从日常的蝇营狗苟中抽离出来，站在一个更宏大、更永恒的视角来看待自己的烦恼和世界的喧嚣。那些焦虑，在这片亘古的宁静面前，似乎被稀释了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，这就是为什么每一个热爱深度游的灵魂，都应该来见一见阿莱奇。它不仅仅是一个景点，它是一面镜子，照见地球的过去与未来；它也是一声警钟，用肉眼可见的消逝告诉我们保护家园的迫切；它更是一位沉默的哲人，教你关于尺度、关于时间、关于敬畏的深刻一课。在这个快被数字和信息淹没的时代，站在真实的、流动的亿万吨寒冰面前，感受那份原始的、压倒性的力量与美感，是一次对心灵的彻底重置。你会带着对自然更深沉的爱与责任离开，也会带着一份被冰川洗礼过的、更加开阔的心境回归生活。这，或许才是旅行最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/norcia-umbria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺尔恰（圣本笃的故乡与黑松露中心）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Norcia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castles-of-bellinzona" className="block group">
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
              <a href="/attractions/chur-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chur Old Town</p>
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
