import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '罗斯科夫 Roscoff｜布列塔尼海盗古城与洋葱商人传奇 - 最佳欧洲景点',
  description: '我第一次听说罗斯科夫，是因为那串听起来有点可爱的名字——“粉红洋葱之城”。但当我真正站在它面前时，所有的味觉想象都被眼前这幅粗粝而坚毅的画面击碎了。这哪里是一个温婉的田园小镇？分明是一座从花岗岩里生长出来的、直面大西洋狂风的战士之城。车子还没完全停下，一股混合着海藻咸腥、淡淡鱼获和远处隐约飘来的焦糖',
}

export default function RoscoffPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '菲尼斯泰尔省（布列塔尼大区）', href: '/destinations/france' },
            { label: '罗斯科夫', href: '/attractions/roscoff' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`罗斯科夫・Roscoff・法国・菲尼斯泰尔省（布列塔尼大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`我第一次听说罗斯科夫，是因为那串听起来有点可爱的名字——“粉红洋葱之城”。但当我真正站在它面前时，所有的味觉想象都被眼前这幅粗粝而坚毅的画面击碎了。这哪里是一个温婉的田园小镇？分明是一座从花岗岩里生长出来的、直面大西洋狂风的战士之城。车子还没完全停下，一股混合着海藻咸腥、淡淡鱼获和远处隐约飘来的焦糖黄油香气的风，就猛地灌进了车窗。那是布列塔尼特有的、充满生命力的气味。
穿过港口，停泊着蓝色渔船的泊位叮咚作响，海鸥的叫声尖锐地划破潮湿的空气。而当你转过身，背对着大海望向老城，震撼才真正开始。密密麻麻的房屋，几乎全部由本地开采的浅灰色花岗岩砌成，经过几百年海风的打磨和雨水的冲刷，呈现出一种温润又冷峻的质感。屋顶是陡峭的深色板岩，那些造型奇特的烟囱，像一个个倒扣的小船，沉默地讲述着这里居民与海洋血脉相连的故事。阳光好的时候，光线在岩石的凹凸面上跳跃，整座老城像一块巨大的、正在呼吸的礁石。
你很快会发现，罗斯科夫的精髓在于一种“双重生活”。清晨，港口边的小咖啡馆里，穿着防水围兜的渔民喝着苹果酒，谈论着潮汐和渔获。而在老城的石板路小巷里，另一位老人可能正小心地整理着他门前木箱里紫红色的洋葱，那是本地人视若珍宝的“玫瑰色罗斯科夫洋葱”。海盗的野性和农人的精细，在这里奇异又和谐地融为一体。这里没有巴黎的浮华，没有蔚蓝海岸的慵懒，有的是一种扎根于岩石与海浪之间的、近乎固执的生存尊严和宁静力量。最打动我的，正是这种毫不修饰的真实感，它不讨好游客，只是日复一日地过着属于自己的、与大海协商好的日子。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我第一次听说罗斯科夫，是因为那串听起来有点可爱的名字——“粉红洋葱之城”。但当我真正站在它面前时，所有的味觉想象都被眼前这幅粗粝而坚毅的画面击碎了。这哪里是一个温婉的田园小镇？分明是一座从花岗岩里生长出来的、直面大西洋狂风的战士之城。车子还没完全停下，一股混合着海藻咸腥、淡淡鱼获和远处隐约飘来的焦糖黄油香气的风，就猛地灌进了车窗。那是布列塔尼特有的、充满生命力的气味。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过港口，停泊着蓝色渔船的泊位叮咚作响，海鸥的叫声尖锐地划破潮湿的空气。而当你转过身，背对着大海望向老城，震撼才真正开始。密密麻麻的房屋，几乎全部由本地开采的浅灰色花岗岩砌成，经过几百年海风的打磨和雨水的冲刷，呈现出一种温润又冷峻的质感。屋顶是陡峭的深色板岩，那些造型奇特的烟囱，像一个个倒扣的小船，沉默地讲述着这里居民与海洋血脉相连的故事。阳光好的时候，光线在岩石的凹凸面上跳跃，整座老城像一块巨大的、正在呼吸的礁石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你很快会发现，罗斯科夫的精髓在于一种“双重生活”。清晨，港口边的小咖啡馆里，穿着防水围兜的渔民喝着苹果酒，谈论着潮汐和渔获。而在老城的石板路小巷里，另一位老人可能正小心地整理着他门前木箱里紫红色的洋葱，那是本地人视若珍宝的“玫瑰色罗斯科夫洋葱”。海盗的野性和农人的精细，在这里奇异又和谐地融为一体。这里没有巴黎的浮华，没有蔚蓝海岸的慵懒，有的是一种扎根于岩石与海浪之间的、近乎固执的生存尊严和宁静力量。最打动我的，正是这种毫不修饰的真实感，它不讨好游客，只是日复一日地过着属于自己的、与大海协商好的日子。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`罗斯科夫`} />
                <InfoRow label="英文名称" value={`Roscoff`} />
                <InfoRow label="正式名称" value={`Roscoff`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`菲尼斯泰尔省（布列塔尼大区）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座将中世纪海盗历史与近代农业贸易传奇紧密交织在一起的布列塔尼海港要塞。`} />
                <InfoRow label="建筑特色" value={`以坚固的花岗岩房屋群为核心，陡峭的板岩屋顶和装饰性的船形烟囱是其最鲜明的标志。`} />
                <InfoRow label="建筑风格" value={`典型的布列塔尼传统海港城镇风格，兼具防御功能的朴实与海事文明的装饰细节。`} />
                <InfoRow label="文化价值" value={`体现了布列塔尼人坚韧不拔、面向大海求生存的精神，是航海文化与精耕农业（尤其是著名的“粉红洋葱”）完美共生的活态见证。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城区域全天24小时开放。主要景点如洋葱商人故居博物馆、植物园等开放时间各异：洋葱商人故居博物馆通常在4月至9月每日上午10点至下午6点开放，10月至次年3月仅在周末下午开放；罗斯科夫生物植物园全年开放，但冬季（11月至2月）开放时间缩短为下午时段。多数小型博物馆和画廊在冬季会闭馆或缩短开放时间，建议行前在其官网确认。节假日（尤其是法国法定假日）部分场所可能关闭。`} />
              <InfoRow label="门票价格" value={`进入罗斯科夫古城本身无需门票。洋葱商人故居博物馆门票约5欧元，学生及团体有优惠。罗斯科夫生物植物园门票约7欧元。联票或季节性通票通常不提供。港口乘船前往附近岛屿（如巴茨岛）需另行购票，票价约15-25欧元往返。`} />
              <InfoRow label="地址" value={`Place de l‘Église, 29680 Roscoff, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发：最便捷的方式是乘坐TGV高速火车从巴黎蒙帕纳斯火车站直达莫尔莱站，车程约3.5-4小时。从莫尔莱站转乘当地公交或出租车前往罗斯科夫，车程约30-40分钟，公交班次有限，尤其是周末和晚间，提前查询“BreizhGo”公交时刻表至关重要。
从雷恩出发：可乘坐区域列车（TER）至莫尔莱，再换乘公交。
自驾：从巴黎沿A11转N12、N164公路前往，全程约550公里，需5-6小时。罗斯科夫老城内街道狭窄且为步行区，建议将车停放在港口或城外的收费停车场（如Place des Otages停车场）。
从英国出发：季节性（主要是夏季）有从英国普利茅斯或科克直接抵达罗斯科夫的渡轮，是体验洋葱商人传统航线的有趣方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗斯科夫的故事，是从海浪拍打礁石的声音和刀剑碰撞的铿锵声中开始的。早在中世纪，这座伸入英吉利海峡的小小半岛，就因为其易守难攻的地形，成了布列塔尼海盗和私掠船船长们最钟爱的巢穴。想象一下十五、十六世纪的光景：这些胆大包天的海狼们，驾着灵活的快船，以罗斯科夫错综复杂的礁石区和坚固的石头房屋为掩护，神出鬼没地袭击往来于法国、英国和低地国家之间的商船。那时的财富，是直接从海上抢来的金银和货物，老城里那些看似朴实的石头大宅，很多地基里都埋藏着这段狂野不羁的过往。甚至可以说，是海盗经济为罗斯科夫最初的繁荣打下了基石，也塑造了当地人独立强悍的性格。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间的指针拨到16世纪，罗斯科夫迎来了它历史上第一个“正式”的高光时刻。一位名叫让·德·科唐贝尔的当地船主兼商人，凭借其雄厚的财力和影响力，成功地从法国国王弗朗索瓦一世那里为罗斯科夫争取到了“城镇”的自治地位。从此，它不再仅仅是一个海盗窝点，而是一个可以合法进行海上贸易的港口。教堂的钟楼建起来了，防御工事得到了加固，城市的格局基本定型。我们今天看到的那些宏伟的文艺复兴风格花岗岩宅邸，很多就建于这个相对稳定和富裕的时期。海风依旧凛冽，但财富的积累方式，已经开始悄然转变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正让罗斯科夫的名字传遍欧洲，甚至塑造了其独特文化身份的，并不是海盗的劫掠，而是一种看起来朴实无华的农作物——洋葱。故事来到19世纪中叶，一位名叫亨利·奥利维尔的年轻农民发现，罗斯科夫贫瘠多石、海风肆虐的土壤，加上特殊的气候，竟然能种出一种风味极其浓郁、保存期超长的粉红色洋葱。于是，一场大胆的商业冒险开始了。从19世纪末起，每年夏天，成群结队的罗斯科夫农民（他们后来被称为“约翰尼”，即“卖洋葱的约翰”），会头顶着巨大的洋葱串，乘坐小型帆船横渡英吉利海峡，在英国各地的街头上门叫卖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个画面成为了传奇：布列塔尼人坚韧的身影，混合着洋葱的辛辣气味，走遍了英国的城镇乡村。这不仅是一项成功的农产品出口，更是一次深刻的文化输出。“罗斯科夫粉红洋葱”成了高品质的代名词，而“洋葱商人”也成了布列塔尼人勤劳、诚信和冒险精神的象征。老港口的许多建筑，都见证了洋葱装船启航的热闹场景。这段历史，给罗斯科夫刚毅的海盗底色，增添了一抹辛劳而光荣的暖色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入20世纪，随着交通方式的变革，洋葱商人横渡海峡的帆船逐渐被火车和卡车取代，但罗斯科夫并未沉沦。它找到了新的方向：海洋生物研究和旅游业。著名的罗斯科夫生物研究所建立于此，使这里成为欧洲海洋科学的重镇。同时，人们也开始珍视并精心保护那些承载着海盗、商人和农民记忆的花岗岩街道与建筑。今天的罗斯科夫，依然保持着那份略带孤傲的宁静，它既是活生生的历史博物馆，也是一个依然在呼吸、在工作的布列塔尼家园。走在它的街道上，你指尖触摸的每一块石头，都沉淀着从海盜的匕首到洋葱的根须，这跨越数百年的、惊心动魄又踏实平凡的故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味罗斯科夫，建议安排完整的一天，并在这里住上一晚，感受海港从清晨到日暮的不同韵味。最佳抵达时间是上午九点左右，此时渔船归港，市场苏醒，阳光刚好照亮老城东侧的花岗岩墙壁。整体游览节奏应该慢下来，以步行为主，路线呈一个环形，从港口开始，深入老城迷宫，再沿着海岸线回到起点，全程慢慢逛下来需要5-6小时。这样安排既能捕捉到最生动的市井生活画面，又能避开可能出现的午后旅行团，并在光线最柔和的傍晚时分回到港口看日落。记得穿一双绝对舒适的步行鞋，因为石板路起伏不平且光滑。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`老城许多小巷的古老石板被岁月打磨得异常光滑，下雨或晨露时非常湿滑，务必注意脚下。
七八月是法国度假旺季，港口和主要街道会非常拥挤，建议尽可能选择五月、六月或九月前往，体验更宁静。
如果想品尝最新鲜的海鲜，午餐时间比晚餐更好，因为很多渔获是清晨上岸的。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老港口（Vieux Port）的防波堤开始，看色彩斑斓的渔船随着海浪轻轻摇晃，听渔民们用布列塔尼语高声交谈。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身钻进港区背后第一条狭窄的上坡石板巷，让两侧高耸的、布满苔痕的花岗岩墙壁将你瞬间带入几个世纪前的氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在蜿蜒上升的小路尽头，豁然遇见圣尼古拉教堂那敦实的钟楼，走进去感受内部简朴而庄严的空间，以及从彩色玻璃透进的、被海风洗礼过的光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`以教堂为圆心，像迷失方向一样随意探索周边蛛网般的小巷，刻意寻找那些门楣上雕刻着船只、贝壳或水手形象的古老大门。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`前往城东的“洋葱商人故居”博物馆，在那个低矮的石屋里，通过老照片和实物，感受当年“约翰尼”们头顶洋葱串跨海谋生的艰辛与荣光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花一点时间漫步到约翰内特花园或更远的罗斯科夫生物植物园，在奇特的异域植物和宁静的海景平台中，体会这座小镇与自然科学的深厚渊源。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午晚些时候，回到港口边的海鲜市场或露天咖啡馆，点一打当地产的牡蛎或一份可丽饼，看着渡轮缓缓驶向远处的巴茨岛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落时分，沿着海岸步行道（Sentier Côtier）向北走一段，回头眺望整个罗斯科夫老城在金色余晖中如同漂浮在海面上的巨石城堡的剪影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`港口防波堤尽头侧拍老城`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在防波堤尽头，用长焦镜头压缩空间，将停泊的渔船作为前景，聚焦后方层层叠叠、沐浴在侧光中的花岗岩房屋群。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣尼古拉教堂旁的小广场仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后，阳光能照亮教堂花岗岩立面的纹理，站在广场较低处向上拍摄，将部分古老的半木结构房屋屋檐纳入构图，形成质感和年代的对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城某条深邃小巷的纵深感捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分当阳光直射入窄巷时，寻找一条有特色的门廊或窗台作为前景，拍摄光线在湿漉漉的石板路上形成的耀眼光带，延伸至巷尾的亮处。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城北海岸步道全景位`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，从海岸步道某个略高的位置向西拍摄，将崎岖的海岸线、小小的礼拜堂（Chapelle Sainte-Barbe）以及远方海面上的岛屿一同纳入画面，色彩最为丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“约翰尼”洋葱田与海景结合`}</h4>
                  <p className="text-sm text-gray-700">{`如果季节合适（夏季），在罗斯科夫郊区寻找仍在种植的粉红洋葱田，以低角度拍摄，让紫红色的洋葱头充满前景，背景是远处蔚蓝的大西洋，讲述土地与海洋的故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`布列塔尼的天气变化极快，一片云过来光线就完全不同，耐心是获得好照片的关键。`}</li>
                <li>• {`拍摄海景时，尝试用慢门（需携带小三脚架）模糊海浪，能营造出如丝绸般的梦幻效果，与坚硬的岩石形成对比。`}</li>
                <li>• {`尊重当地居民隐私，避免将镜头过于直接地对准私人住宅的窗户或正在休息的渔民。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`海港边的历史宅邸`}</h4>
                  <p className="text-sm text-blue-800">{`选择一栋由16世纪船东豪宅改造的精品酒店，房间里有裸露的原木梁和石墙，窗户正对着泊满船只的港口，夜晚能听着轻柔的潮水声入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`藏身老城腹地的宁静民宿`}</h4>
                  <p className="text-sm text-green-800">{`入住一对退休船长夫妇经营的家庭民宿，早餐能吃到房东自制的苹果果酱和可丽饼，他们还能给你讲述地图上找不到的老罗斯科夫传说。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代风格的海景设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城边缘，拥有全景落地窗和简约内饰，在一天的古城探险后，回到这里泡个澡，直面毫无遮挡的大西洋日落，是另一种极致享受。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外田园风情的庄园住宿`}</h4>
                  <p className="text-sm text-purple-800">{`如果你自驾，可以选择一家坐落在洋葱田和朝鲜蓟田之间的乡村庄园，体验真正的布列塔尼农家生活，清晨在鸡鸣和泥土芬芳中醒来。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗斯科夫治安非常好，但老城内的住宿由于多是古老建筑，隔音可能一般，且楼梯通常陡峭，预订时需留意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）住宿非常紧张且价格高昂，务必提前数月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择海港第一排的住宿固然风景绝佳，但需注意夏季可能有海鸥清晨鸣叫以及潮湿的海风。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开罗斯科夫好些天了，手指尖似乎还能感受到那些花岗岩墙壁的微凉与粗糙。这种触感很奇妙，它不像其他那些精致打磨过的旅游城镇那样光滑、讨好。它带着阻力，带着历经风浪后的沉默质感，像是在提醒你：这里的一切都不是舞台布景，而是真实生活与漫长时光共同锻造的痕迹。你会记得海风的气味，记得洋葱的甜辣，记得渔民那双看惯了大海因而显得格外平静的眼睛。这里没有需要仰视的恢弘杰作，只有一种向下扎根、向内生长的力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、热衷贴标签的快节奏世界里，罗斯科夫就像一位不愿随波逐流的老水手。它不屑于把自己包装成明信片式的风景，它只是坦然呈现着自己的多重身份——海盗的堡垒、商人的港口、农民的田埂、科学家的实验室。正是这种复杂性，让它拥有了超越风景的深度。它告诉我们，一个地方的灵魂，不在于它有多美，而在于它如何在与严酷的自然和变幻的时代博弈中，活出自己的样子。所以，如果你厌倦了那些千篇一律的精致古镇，渴望一次能触摸到历史筋骨、闻到生活本味的旅行，那么，请务必来罗斯科夫。它不会给你轻松的浪漫，但会赠予你一份厚重的、关于坚韧与传承的感动。这份感动，足以让你在日后许多个平淡的日子里，想起那片灰色岩石和紫红洋葱组成的海角时，心头为之一振。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gouffre-de-padirac" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕迪拉克深渊</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gouffre de Padirac</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/les-baux-de-provence" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱博德普罗旺斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Les Baux-de-Provence</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pont-du-gard" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加尔桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pont du Gard</p>
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
