import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝纳克城堡 Château de Beynac｜悬崖上的百年战争堡垒与多尔多涅河谷绝景 - 最佳欧洲景点',
  description: '还记得我第一次开车沿着多尔多涅河谷蜿蜒前行时，两旁是绵延的核桃林和沉睡的农庄。一个拐弯过后，它突然撞进视野——贝纳克城堡。那一瞬间我几乎屏住了呼吸。它不像那些精心修剪、供人观赏的宫殿，而是一头盘踞在150米高悬崖上的巨兽，通体是蜂蜜色的石灰岩，被数百年风雨打磨出深浅不一的纹理。阳光斜照，整座城堡在深...',
}

export default function ChateauDeBeynacPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '贝纳克城堡', href: '/attractions/chateau-de-beynac' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝纳克城堡・Château de Beynac・法国・萨拉（靠近贝纳克-卡泽纳克公社）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还记得我第一次开车沿着多尔多涅河谷蜿蜒前行时，两旁是绵延的核桃林和沉睡的农庄。一个拐弯过后，它突然撞进视野——贝纳克城堡。那一瞬间我几乎屏住了呼吸。它不像那些精心修剪、供人观赏的宫殿，而是一头盘踞在150米高悬崖上的巨兽，通体是蜂蜜色的石灰岩，被数百年风雨打磨出深浅不一的纹理。阳光斜照，整座城堡在深绿色的河水映衬下，散发着一种近乎威严的金色光芒。你几乎能听见历史的低吼。
停好车，沿着陡峭的、被无数足迹磨得光滑的石阶往上爬，是朝圣这部石砌史诗的唯一方式。空气中混合着干草、暖石和远处河谷飘来的湿润水汽的味道。每一步都能感受到脚下岩石的坚实，以及城堡投下的巨大阴影带来的凉意。偶尔有燕子在城墙的箭垛间急速掠过，发出清脆的鸣叫，更衬托出这里的寂静与肃穆。这不是一个与世隔绝的景点，你脚下村庄的炊烟袅袅升起，教堂的钟声准点响起，当地老人的手推车在石板路上发出咕噜声——城堡就像一位沉默的祖父，依然守护着子孙的日常生活。
当你终于站在城堡主庭院，喘着气回过头，那份震撼是无与伦比的。多尔多涅河在脚下画出一道巨大的弧线，河谷像一块铺开的、拼接了墨绿、金黄与赭石色的天鹅绒地毯。风穿过空旷的大厅和箭孔，发出呜呜的、仿佛叹息般的声音。城堡的核心魅力，就在于这种极致的反差：内部是冰冷、严峻、充满战争记忆的石头迷宫，而每一个窗口和露台，框出的却是法国最温柔、最丰饶的田园诗。你仿佛一脚站在铁与血的中世纪，另一脚却踏入了永恒的和平与丰美之中。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还记得我第一次开车沿着多尔多涅河谷蜿蜒前行时，两旁是绵延的核桃林和沉睡的农庄。一个拐弯过后，它突然撞进视野——贝纳克城堡。那一瞬间我几乎屏住了呼吸。它不像那些精心修剪、供人观赏的宫殿，而是一头盘踞在150米高悬崖上的巨兽，通体是蜂蜜色的石灰岩，被数百年风雨打磨出深浅不一的纹理。阳光斜照，整座城堡在深绿色的河水映衬下，散发着一种近乎威严的金色光芒。你几乎能听见历史的低吼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，沿着陡峭的、被无数足迹磨得光滑的石阶往上爬，是朝圣这部石砌史诗的唯一方式。空气中混合着干草、暖石和远处河谷飘来的湿润水汽的味道。每一步都能感受到脚下岩石的坚实，以及城堡投下的巨大阴影带来的凉意。偶尔有燕子在城墙的箭垛间急速掠过，发出清脆的鸣叫，更衬托出这里的寂静与肃穆。这不是一个与世隔绝的景点，你脚下村庄的炊烟袅袅升起，教堂的钟声准点响起，当地老人的手推车在石板路上发出咕噜声——城堡就像一位沉默的祖父，依然守护着子孙的日常生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于站在城堡主庭院，喘着气回过头，那份震撼是无与伦比的。多尔多涅河在脚下画出一道巨大的弧线，河谷像一块铺开的、拼接了墨绿、金黄与赭石色的天鹅绒地毯。风穿过空旷的大厅和箭孔，发出呜呜的、仿佛叹息般的声音。城堡的核心魅力，就在于这种极致的反差：内部是冰冷、严峻、充满战争记忆的石头迷宫，而每一个窗口和露台，框出的却是法国最温柔、最丰饶的田园诗。你仿佛一脚站在铁与血的中世纪，另一脚却踏入了永恒的和平与丰美之中。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝纳克城堡`} />
                <InfoRow label="英文名称" value={`Château de Beynac`} />
                <InfoRow label="正式名称" value={`Château de Beynac`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`萨拉（靠近贝纳克-卡泽纳克公社）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国保存最完好的中世纪城堡之一，英法百年战争期间英格兰在佩里戈尔地区最重要的前哨堡垒。`} />
                <InfoRow label="建筑特色" value={`一座纯粹为防御而生的军事建筑杰作，宛如从石灰岩悬崖上生长出来，与山岩融为一体。`} />
                <InfoRow label="建筑风格" value={`罗马式与早期哥特式风格相结合，历经数百年加固与扩建，呈现出层层叠叠的厚重感。`} />
                <InfoRow label="文化价值" value={`不仅是石头史诗，更是理解法国西南部领主纷争、骑士文化与河谷生活方式的活态教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡全年开放，但开放时间随季节变化显著。夏季（通常为四月至九月）开放时间为上午9:30至傍晚6:30，最晚入场时间为关闭前一小时。冬季（十月至三月）开放时间缩短，通常为上午10点至傍晚5点，部分周二可能闭馆。具体日期每年可能有微调，出行前务必在其官网查看最新公告。城堡内部在恶劣天气（如暴雨、强风）时可能部分关闭。`} />
              <InfoRow label="门票价格" value={`成人票价格为10.5欧元。优惠票适用于学生、10-16岁青少年及残疾人，价格为5.5欧元。10岁以下儿童免费。另有家庭套票（2成人+2儿童）可供选择。门票仅限当日有效，通常包含一份多语种导览手册，但专业的语音导览器或导游讲解需额外付费，价格在3-5欧元不等。`} />
              <InfoRow label="地址" value={`Château de Beynac, 24220 Beynac-et-Cazenac, France`} />
              <InfoRow label="交通方式" value={`最近的主要交通枢纽是贝尔热拉克机场或布里夫-苏尔-拉瓦机场，但最方便的抵达方式是火车。从巴黎蒙帕纳斯火车站乘坐TGV高速列车前往苏亚克或萨尔拉-拉卡内达，车程约4-5小时，需提前预订。抵达火车站后，最佳方式是租车自驾，沿着美丽的D57公路行驶约20-30分钟即可抵达贝纳克村，城堡位于山顶，山下有指示牌清晰的停车场。另一种选择是从萨尔拉乘坐地区巴士，但班次稀疏（每天仅2-3班），耗时约40分钟，务必提前查好时刻表。自驾是最推荐的方式，能让你自由探索周边如画的河谷村落。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂贝纳克城堡的石头在诉说怎样的故事，你得把时钟拨回12世纪。那时，这里还只是男爵们炫耀武力的一个据点。最初的堡垒很简单，就是靠着悬崖的天险，建起一座主塔和一圈围墙。但它的命运在1150年左右被改写，一位名叫阿代马尔·德·贝纳克的领主，决定把它建得更坚固、更高大。为什么？因为财富——脚下这条平静的多尔多涅河，是当时连接内陆与波尔多的黄金水道，盐、木材、葡萄酒都从这里经过。谁控制了这座悬崖，谁就扼住了河谷的咽喉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的传奇，随着英法百年战争的硝烟而来。14世纪，整个佩里戈尔地区成了英法两国王室和本地领主们疯狂撕扯的棋盘。贝纳克城堡由于其不可替代的战略位置，成了双方必争之地。城堡本身属于法国王室阵营，但讽刺的是，河对岸不到四公里的地方，就是英国人的卡斯蒂诺城堡。你能想象那个画面吗？两座城堡隔河相望，双方的哨兵日日夜夜都能看到对方的炊烟和旗帜。紧张的对峙持续了数十年，期间发生了无数次小规模冲突和偷袭。城堡的每一道新增的壁垒、每一个加厚的塔楼，都是那段恐怖而漫长对峙的产物。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`说到人物，就不得不提那位在城堡历史上留下最深烙印的法国领主——贝纳克领主。其中最著名的一位，以铁腕和忠诚著称。传说他为了向法国国王证明自己的决心，曾将自己唯一的儿子送到巴黎作为人质。在城堡阴冷的主厅里，当你摸着那巨大的壁炉，仿佛还能听到他与骑士们商议军情、发誓绝不将城堡拱手让人的声音。而另一段更富戏剧性的插曲则与英国国王有关：狮心王理查一世在征战途中也曾短暂觊觎过这座堡垒，但最终未能将其攻陷。这些故事真假参半，却为冰冷的石墙注入了血性与灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争终于在1453年结束了，火炮的出现也让高墙深垒的军事价值大打折扣。贝纳克城堡没有沦为废墟，而是优雅地转型了。它从一个军事堡垒，逐渐变成了领主们展示财富与地位的庄园。文艺复兴的春风吹进了厚重的窗户，他们增建了更舒适的起居室，开凿了更大的窗户以引入河谷的阳光和美景。那些曾用来倾倒滚油和箭矢的防御工事，被改造成了可以欣赏落日全景的露台。石头还是那些石头，但气息完全变了，从杀气腾腾变得闲适甚至浪漫。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，时间的侵蚀并未停止。法国大革命后，城堡被没收，一度荒废，差点沦为采石场。直到20世纪初，一位有远见的历史建筑爱好者买下了它，开始了漫长而艰辛的修复。我们今天能看到如此完整的中世纪内饰——包括那个拥有壮观哥特式拱顶的礼堂、领主大厅里罕见的14世纪壁画、以及保存完好的厨房——都要归功于这次拯救。如今，它依然由私人家族管理，这份延续了八百年的“活着”的状态，让它的每一块石头都带着温度，而不是博物馆里冰冷的标本。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的贝纳克城堡之旅，应该像品一杯当地产的黑松露葡萄酒，需要足够的时间和从容的心情。强烈建议你在开门的早晨（夏季9:30，冬季10:00）第一批抵达，此时光线最柔和，旅游团大部队还未杀到，你能独享城堡的宁静。整个深度游览需要至少3到4个小时。节奏应该是“先紧后松”：先用一个半小时专注地探索城堡内部复杂如迷宫的空间，聆听历史的回声；然后放慢脚步，在城堡的露台和庭院长时间驻足，沉醉于河谷全景；最后下山，用同样多的时间漫步中世纪村庄，在河边结束旅程。这样的安排能让你从历史、景观到生活，立体地感受这个地方的灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内的螺旋石阶极其陡峭且光滑，务必穿防滑性能好的平底鞋，高跟鞋和凉鞋在这里是灾难。夏季午后是旅游团和一日游游客的高峰期，城堡内部会非常拥挤嘈杂，严重影响体验，务必坚持早到的原则。村庄里的餐厅和城堡咖啡店价格偏高且选择有限，建议自备简单的午餐（如法棍、奶酪和水果），在河边的树荫下野餐是更棒的体验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一批穿过那道令人生畏的吊桥门洞，感受门楣上厚重的铁闸带来的第一丝凉意与压迫感`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在昏暗的领主大厅里静静站一会儿，让眼睛适应光线，仔细辨认墙壁上那些描绘骑士比武场景的、斑驳的14世纪壁画`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄到只能容一人通过的螺旋石阶一路攀爬，抵达最高的主塔楼，在四面来风中感受城堡作为军事瞭望点的绝对视野`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进那个巨大的厨房，看看原始的壁炉和挂钩，想象一下战争时期这里为数百名士兵准备食物的忙碌与烟熏火燎`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从阴冷的石室步入洒满阳光的文艺复兴风格露台，瞬间从战争叙事切换到田园诗画风的强烈对比会让你久久难忘`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时别走原路，选择那条穿过贝纳克中世纪村庄的小径，摸摸那些蜂蜜色石头房子的墙壁，和坐在门口晒太阳的老奶奶打个招呼`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后走到多尔多涅河畔，找一块平坦的石头坐下，从下往上仰望悬崖上的城堡，完成这次游览的最后一个也是最重要的视角转换`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有精力，可以租一条传统平底船，让船夫带你从河中心的水面上，欣赏城堡与悬崖倒映在水中的完整对称画面`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河对岸的公路转弯处`}</h4>
                  <p className="text-sm text-gray-700">{`在日落前半小时，驱车至多尔多涅河对岸的D703公路特定弯道，可以拍到城堡沐浴在金色夕阳下、河水如镜面般映出它完整倒影的经典全景`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡西侧露台`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点左右，阳光将城堡自身和远处河谷的层次感塑造得极强，利用露台的石垛作为前景框架，可以拍出极具纵深感和故事感的照片`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`村庄主街仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在村庄主街的石板路上向上仰拍，用两旁古老的石头房屋作为引导线，将雄伟的城堡塔楼框在巷子尽头，形成强烈的视觉冲击`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`领主大厅的窗口`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当一束强烈的阳光恰好从狭小的窗口射入昏暗的大厅，形成一道清晰的光柱，迅速抓拍这束光打在古老石砖或壁炉上的戏剧性瞬间`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从城堡停车场的小径回望`}</h4>
                  <p className="text-sm text-gray-700">{`游览结束后下山时，不要急着离开停车场，旁边有一条向河边延伸的小径，走几分钟回望，可以拍到城堡与山下红色屋顶村庄融为一体的生动全景`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前必须极其谨慎，最好提前向城堡管理部门或当地旅游局咨询，因为法国对历史遗迹上空的飞行管制非常严格。城堡内部大部分区域禁止使用闪光灯和三脚架，这是为了保护脆弱的壁画和古老内饰，请务必遵守。河谷地区在清晨和雨后常常有平流雾，这虽然是拍摄梦幻大片的好机会，但也意味着需要做好防潮准备，并耐心等待雾气散开的瞬间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接下榻在贝纳克村庄里由15世纪石屋改造的精品客栈，木头横梁、石墙和壁炉原汁原味，晚上能听到城堡传来的风声，清晨在公鸡啼鸣中醒来`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`景观至上选择`}</h4>
                  <p className="text-sm text-green-800">{`住在河对岸拉罗克-加日克小镇的悬崖酒店，房间阳台正对贝纳克城堡，你可以喝着早餐咖啡，看着晨雾如轻纱般慢慢从城堡脚下褪去`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园风心水之选`}</h4>
                  <p className="text-sm text-yellow-800">{`距离城堡几分钟车程的多尔多涅河畔农庄，主人会提供家庭式的丰盛佩里戈尔晚餐（鹅肝、核桃沙拉、油封鸭），晚上在花园里可以看到最纯净的星空`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷舒适之选`}</h4>
                  <p className="text-sm text-purple-800">{`住在14公里外萨尔拉-拉卡内达镇上的四星级酒店，那里有更多的餐厅和商店选择，方便作为基地探索整个“法国最美乡村”区域，每天开车往返风景如画的河谷公路本身就是享受`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`贝纳克村内的住宿数量非常有限，且极受欢迎，尤其是在夏季和秋季松露季节，务必提前至少三个月预订。河谷地区许多特色住宿不接待短期（一晚）入住，通常要求至少两晚起订，预订时请仔细阅读条款。尽管这里治安良好，但村庄夜晚照明较少，从停车场步行回住处建议携带小手电。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开贝纳克好几天后，我眼前还是会不时浮现出那个画面：一边是冰冷严峻、诉说着战争与死亡的堡垒内部，另一边，从它的每一扇窗望出去，却是流淌的河水、肥沃的农田、和沐浴在阳光下的宁静村落。这种巨大的、几乎哲学性的反差，一直在我心里回响。这座城堡教会我的，或许正是这一点：人类的历史从来不是单线条的。它既有为争夺资源而筑起高墙的残酷与恐惧，也有在战火间隙对阳光、丰收与和平美景最本能的渴望与眷恋。石头是防御，而窗口是向往。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、扁平、即时满足的时代，贝纳克这样的地方是一剂必要的“减速剂”。它要求你付出体力去攀登，要求你静下心来聆听风声和历史的低语，要求你从多个角度——从河面仰望，从对岸平视，从内部感受——去拼凑一个完整的认知。它不会给你轻松愉快的娱乐，却会给你一种沉甸甸的、关于时间与存在的真切感触。所以，如果你也厌倦了走马观花的打卡，渴望一场能与土地、历史和自我对话的旅行，请一定要来贝纳克。它不是最华丽的，但一定是最坚硬、最诚实、最能触动人心的欧洲记忆之一。在这里，你不是游客，而是短暂踏入时间长河的行者。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/durnstein-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杜恩施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dürnstein Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dinan-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dinan Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nis-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    尼
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">尼什古堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Niš Fortress</p>
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
