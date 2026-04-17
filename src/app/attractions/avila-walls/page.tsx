import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿维拉古城墙 Walls of Ávila｜漫步欧洲保存最完整的中世纪防御工事，触摸西班牙的灵魂之门 - 最佳欧洲景点',
  description: '车子刚驶出山间公路，一片广阔的高原谷地豁然开朗，而地平线上最抓人眼球的，就是那条在午后的阳光下泛着金棕色光芒的、无比厚重的石带。那就是阿维拉城墙给我的第一眼冲击——不像是一座墙，更像是一座被放大了无数倍的、正在沉睡的远古巨兽的脊梁。它稳稳地蹲踞在那里，带着一种近乎固执的沉默，把一座完整的城市抱在怀里...',
}

export default function AvilaWallsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿维拉古城墙', href: '/attractions/avila-walls' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿维拉古城墙・Walls of Ávila・西班牙・阿维拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚驶出山间公路，一片广阔的高原谷地豁然开朗，而地平线上最抓人眼球的，就是那条在午后的阳光下泛着金棕色光芒的、无比厚重的石带。那就是阿维拉城墙给我的第一眼冲击——不像是一座墙，更像是一座被放大了无数倍的、正在沉睡的远古巨兽的脊梁。它稳稳地蹲踞在那里，带着一种近乎固执的沉默，把一座完整的城市抱在怀里。空气是清冽的，带着卡斯提尔高原特有的干燥草香，以及一种从千年花岗岩缝里渗出来的、微凉的历史气息。
慢慢走近，感官才逐渐苏醒。城墙脚下长满了被风吹得倒向一边的野草，摩挲着裤脚沙沙作响。用手触摸墙体，石头表面粗糙而温暖，阳光把一部分晒得滚烫，阴影处却依旧冰凉。抬起头，城墙高达12米，那种压迫感是实实在在的，你几乎能想象到古代攻城者站在这里的绝望。风声在高处变得不同，穿过雄堞的缺口时，会发出一种低沉的、类似呜咽的哨音，和远处教堂偶尔传来的、被距离模糊了的钟声交织在一起，构成这座城市独有的背景音。当地的老人们会慢悠悠地从城门洞里穿行而过，去墙外的超市，或只是牵着狗散步，这座庞大的遗迹对他们而言，就像我们小区门口那棵老槐树一样自然、日常。
但城墙最动人的，不是它的宏伟，而是它的“完整性”。它不是一段残垣，不是孤零零的纪念物，而是一个仍在呼吸的有机整体。城墙之内，是红瓦屋顶、窄巷教堂的中世纪古城；城墙之外，是现代扩展的城区。这道清晰的界线，仿佛是一个时间的断层。走在城墙顶部2.5公里长的步道上，你获得了一种上帝般的视角：一边是迷宫般的古意盎然，另一边是平淡舒展的现代生活。这种奇妙的并置，这种被一道石墙凝固和守护的时光，才是阿维拉古城墙最核心的魅力——它让你同时置身于历史的内部与外部，既感到庇护，又享有自由。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚驶出山间公路，一片广阔的高原谷地豁然开朗，而地平线上最抓人眼球的，就是那条在午后的阳光下泛着金棕色光芒的、无比厚重的石带。那就是阿维拉城墙给我的第一眼冲击——不像是一座墙，更像是一座被放大了无数倍的、正在沉睡的远古巨兽的脊梁。它稳稳地蹲踞在那里，带着一种近乎固执的沉默，把一座完整的城市抱在怀里。空气是清冽的，带着卡斯提尔高原特有的干燥草香，以及一种从千年花岗岩缝里渗出来的、微凉的历史气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`慢慢走近，感官才逐渐苏醒。城墙脚下长满了被风吹得倒向一边的野草，摩挲着裤脚沙沙作响。用手触摸墙体，石头表面粗糙而温暖，阳光把一部分晒得滚烫，阴影处却依旧冰凉。抬起头，城墙高达12米，那种压迫感是实实在在的，你几乎能想象到古代攻城者站在这里的绝望。风声在高处变得不同，穿过雄堞的缺口时，会发出一种低沉的、类似呜咽的哨音，和远处教堂偶尔传来的、被距离模糊了的钟声交织在一起，构成这座城市独有的背景音。当地的老人们会慢悠悠地从城门洞里穿行而过，去墙外的超市，或只是牵着狗散步，这座庞大的遗迹对他们而言，就像我们小区门口那棵老槐树一样自然、日常。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但城墙最动人的，不是它的宏伟，而是它的“完整性”。它不是一段残垣，不是孤零零的纪念物，而是一个仍在呼吸的有机整体。城墙之内，是红瓦屋顶、窄巷教堂的中世纪古城；城墙之外，是现代扩展的城区。这道清晰的界线，仿佛是一个时间的断层。走在城墙顶部2.5公里长的步道上，你获得了一种上帝般的视角：一边是迷宫般的古意盎然，另一边是平淡舒展的现代生活。这种奇妙的并置，这种被一道石墙凝固和守护的时光，才是阿维拉古城墙最核心的魅力——它让你同时置身于历史的内部与外部，既感到庇护，又享有自由。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿维拉古城墙`} />
                <InfoRow label="英文名称" value={`Walls of Ávila`} />
                <InfoRow label="正式名称" value={`Muralla de Ávila`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`阿维拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是欧洲保存最完整、规模最宏大的中世纪防御城墙之一，是西班牙天主教王国“光复运动”的象征，并作为阿维拉老城区的核心部分被联合国教科文组织列为世界文化遗产。`} />
                <InfoRow label="建筑特色" value={`由超过2500个雄堞、88座半圆形塔楼和9座气势恢宏的城门组成，全长超过2.5公里，形成一个近乎完美的矩形，将整个中世纪古城严密地包裹其中。`} />
                <InfoRow label="建筑风格" value={`以罗马式为基础，融合了早期哥特式和穆德哈尔式元素，是11-12世纪军事防御建筑的典范，呈现出一种朴素、坚固、功能至上的美学。`} />
                <InfoRow label="文化价值" value={`它不仅是一座军事工程，更是西班牙民族精神、宗教信仰和城市自治历史的实体见证，被誉为“骑士与圣徒之城”的永恒骨骼。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城墙步道开放时间因季节而异。夏季（4月至10月）通常为周二至周日 10:00 - 20:00，周一 12:00 - 18:00；冬季（11月至次年3月）为周二至周日 10:00 - 18:00，周一关闭。城墙的城门（如阿尔卡萨门）可24小时免费通行。部分塔楼内部仅在特定导览团开放。重要节假日如圣诞节、元旦可能缩短开放时间或关闭，建议行前在官网核实。`} />
              <InfoRow label="门票价格" value={`完整城墙步道（Muralla）门票价格为5欧元，优惠票（学生、65岁以上老人）3.5欧元，12岁以下儿童免费。仅参观“人城”交互式展览中心门票为3欧元。部分包含导游讲解、进入特殊塔楼的深度游套餐价格在8-15欧元不等。每周二下午（冬季）或全天（夏季）对欧盟公民免费，但需凭有效证件在售票处换票。`} />
              <InfoRow label="地址" value={`Plaza de la Catedral, 8, 05001 Ávila, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发最为便捷。马德里查马丁火车站乘坐直达阿维拉的Regional火车，车程约1小时20分钟至1小时40分钟，每天约有10-12班次，票价单程约12-20欧元，可在Renfe官网提前购买。马德里汽车南站乘坐Avanza公司的大巴，车程约1.5小时，班次频繁，约每小时一班，票价更经济，约10欧元。抵达阿维拉火车站或汽车站后，步行约15-20分钟即可抵达古城中心及城墙。自驾则沿A-6或AP-51高速公路行驶约1小时。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解这道墙，得先回到公元11世纪那个刀光剑影的伊比利亚半岛。那时，这里还是基督教王国和穆斯林摩尔人政权拉锯的前线。阿维拉所在的这片荒凉高原，战略位置至关重要。1085年，卡斯蒂利亚国王阿方索六世从摩尔人手中夺取了托莱多，为了巩固北方防线，他决心将阿维拉建设成一个坚不可摧的堡垒。他委托了两名传奇人物来负责这项浩大工程：一位是能征善战的骑士罗德里戈·巴斯克斯，负责军事防卫；另一位则是法国勃艮第的泥瓦匠大师卡斯帕尔。据说，卡斯帕尔借鉴了法国先进的建筑技术，而修建城墙的劳力，除了战俘和本地居民，更有来自北方的十字军战士。想象一下，在贫瘠的高原上，成千上万的人叮叮当当地敲打、搬运着花岗岩石块，尘土飞扬，号子声震天，仅仅九年时间，这道周长两公里半的庞然大物就拔地而起，堪称中世纪版的“基建奇迹”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城墙建好了，故事才真正开始。它迅速成为了卡斯蒂利亚王国向南推进的“骑士大本营”。城内居住着以勇猛闻名的“步兵”（Hombres de Ávila），他们是国王军队的中坚力量。到了12世纪，一位名叫哈辛托的贵族骑士在城墙内的家里，诞生了一个女婴，她后来成为了天主教历史上最著名的神秘主义者之一——圣特蕾莎。你可以说，是这道墙的坚固，给了圣特蕾莎一个得以安然进行深邃灵性探索的物理和精神容器。她创立的赤足加尔默罗会修道院，就坐落在城墙脚下，为这座“硬汉之城”注入了柔软而强大的灵性内核。整个中世纪，阿维拉城墙成功抵御了无数次进攻，从未被武力攻破，成为了“不可征服”的象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，和平带来了改变。随着火炮的出现，高墙的军事意义逐渐下降。16世纪后，城墙不再增建，部分塔楼被改造成私人住宅或仓库，一些城门为了通行马车而被拓宽。它从纯粹的防御工事，慢慢演变为城市景观和身份象征。到了19世纪，浪漫主义思潮兴起，这座沉寂已久的巨墙因其史诗般的外观，重新进入了诗人和艺术家的视野，被奉为西班牙民族精神的丰碑。真正的挑战是在20世纪，城市发展需要空间，曾有人提议拆除部分城墙以修建道路。幸而，有识之士发起保护运动，最终在1884年，它被宣布为国家纪念物，逃过了被推倒的命运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`上世纪80年代开始的大规模修复工程，让古老的城墙得以向公众开放步行道。工人们小心翼翼地修补破损的雄堞，加固地基，并安装了巧妙的照明系统。如今，当夜幕降临，暖黄色的灯光勾勒出它蜿蜒雄壮的轮廓，它不再是冰冷的防御工具，而变成了一件悬浮在夜空中的巨大艺术品，一座为所有到访者点亮的历史灯塔。从军事要塞到精神堡垒，再到文化遗产，阿维拉古城墙的每一块石头，都记录着西班牙从中世纪纷争走向现代文明的漫长足音。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议你留出至少半天（4-5小时）给这段城墙之旅，并尽量在清晨城门刚开时抵达。此时的阳光角度低，能将城墙和塔楼的影子拉得极长，拍照光线绝佳，而且旅游团大军尚未到来，你能享受一份近乎奢侈的宁静。游览节奏应该是“先外后内，再登高俯瞰”。首先，从外部环绕城墙走一段，感受其磅礴气势；然后选择一座主城门进入古城，在巷弄中穿梭，体会被城墙庇护的“内里”；最后，一定要登上城墙步道，完成那长达2.5公里的“天空漫步”，这是整个体验的灵魂。这样的安排能让你从宏观到微观，再从微观回归宏观，对这座建筑奇迹形成一个立体的、沉浸式的认知。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城墙步道大部分没有遮阳，高原紫外线强烈，务必涂抹高倍数防晒霜并戴好帽子。步道狭窄且有些段落台阶陡峭，请一定穿一双防滑舒适的平底鞋，高跟鞋是绝对的“灾难”。如果想进入部分不常规开放的塔楼内部，务必提前在官网查询并预订专门的导游导览团，现场很难临时安排。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从最具象征意义的阿尔卡萨门开始你的朝圣，用手掌感受那被无数人摩挲过的厚重木门上冰凉的铁饰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城墙外的草地小径向东漫步，在最佳全景拍摄点停下，让目光久久流连于那连绵不绝的塔楼与雄堞构成的史诗级天际线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过圣维森特门进入古城内部，立刻淹没在由蜂蜜色石头建筑构成的狭窄巷弄里，寻找飘着新鲜黄油香味的面包房。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“人城”交互中心附近的楼梯登上城墙步道，瞬间视野豁然开朗，风呼啸着吹过耳畔，开始你悬于历史与现实之间的漫步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在连接着大教堂半圆形后殿的“墙中教堂”段落驻足，惊叹于军事防御与宗教建筑如此赤裸而完美的共生。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到北段相对安静的步道，背靠冰凉的石壁坐下，看着墙内居民在庭院里晾晒衣物，墙外火车缓缓驶向远方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从拉斯特罗门走下城墙，直奔城门外的观景台“四柱台”，在落日余晖中回望整座被金色光芒笼罩的“城池与圣殿”。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`普拉多街尽头全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，站在城墙外普拉多街西端的空旷处，用广角镜头可以囊括长达百米的城墙立面与远处雪山同框的壮丽景象。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城墙与大教堂结合部`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前后，阳光恰好照亮大教堂的哥特式后殿与嵌入其中的城墙塔楼，在步道上寻找角度，能拍出建筑力量与信仰美感交织的经典画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`阿尔卡萨门夜景`}</h4>
                  <p className="text-sm text-gray-700">{`日落后蓝调时刻，从城门外的斜坡下仰拍，此时天空呈深蓝色，城墙的暖黄色灯光刚刚亮起，冷暖对比下的城门洞深邃如时光隧道。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`北段城墙步道人文视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，顺光拍摄步道上其他游客或本地漫步者的剪影，以连绵的雄堞和远处的现代城市为背景，故事感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“四柱台”标准明信片角度`}</h4>
                  <p className="text-sm text-gray-700">{`任何时候，但以清晨或黄昏为佳，在这个经典观景台用中焦段拍摄，能将古城、城墙、大教堂和远山全部收纳进一幅画中。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少古老石墙表面的反光，让色彩更加饱和厚重。尝试拍摄一些城墙石块的细节特写，风化痕迹、苔藓、古老的石匠标记，都是充满质感的故事。注意无人机在历史遗迹上空飞行通常有严格限制，未经许可请勿起飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`城墙内的历史民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择一家由15世纪贵族宅邸改造的石头房子民宿，夜晚万籁俱寂，只有从木窗棂望出去那被灯光勾勒的城墙剪影伴你入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`城墙脚下的精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`住进由古老修道院部分建筑修复而成的小型酒店，房间有着拱形石顶，早餐在能看到城墙塔楼的花园里进行，仪式感十足。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城外现代区的性价比之选`}</h4>
                  <p className="text-sm text-yellow-800">{`步行到城墙仅十分钟的现代公寓或三星酒店，设施新颖，停车方便，适合自驾家庭，晚上可以散步去城墙边欣赏夜景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高原庄园体验`}</h4>
                  <p className="text-sm text-purple-800">{`如果时间充裕，可以驱车十几分钟入住周边乡村的“卡萨 rural”（乡村屋），在壁炉旁烤火，体验真正的卡斯蒂利亚田园生活，白天再来探访城墙。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿非常有味道，但多数无法停车，且行李箱在石板路上拖拉是噩梦，建议轻装入住或选择提供行李搬运服务的酒店。阿维拉夏季有重要的宗教节日，冬季圣诞市场期间住宿会很紧张，务必提前数月预订。高原昼夜温差大，即使是夏季，夜晚也可能很凉，确认住宿是否有暖气或厚毯。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我从城墙步道上走下来，双脚重新踏上现代马路的地面时，竟有一种轻微的眩晕感，仿佛从一个漫长的时空隧道里被抛回现实。那道墙依然在那里，沉默、坚固，但它已经不再是旅程开始时那个冰冷的石头巨物了。它变成了一个活着的叙事者，我仿佛能听到石缝间传来的低语，有骑士铠甲碰撞的铿锵，有修女祈祷的细语，有石匠锤凿的叮当，也有寻常百姓穿过城门时的市井喧嚣。它让我明白，真正的伟大，并非一味地追求高耸入云，而是像这样，将一种守护的意志，化为可以触摸的实体，历经千年风雨，依然能给走入它阴影的人，带来最踏实的安全感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都飞速迭代、边界模糊的数字时代，阿维拉古城墙的存在，就像一则古老的寓言。它提醒我们，有些界限是必要的，守护是有形的，历史是可以行走其上、亲身丈量的。它不只是一个“景点”，更是一个让人沉静下来的“场域”。在这里，你被迫慢下来，沿着一条既定的、古老的路径行走，目光所及是千年前规划的城池格局，这本身就是一种对抗时空碎片化的修行。每一位热爱深度游的旅人，都该来这里，花上半天时间，什么也不做，只是走，只是触摸，只是感受。让这道欧洲最完整的石质脊梁，也为你我疲惫的现代灵魂，进行一次短暂而坚实的“加固”。这趟旅程，是关于石头，更是关于时间，以及我们如何在时间的洪流中，为自己寻找一个可以倚靠的坐标。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/segovia-aqueduct" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞哥维亚罗马水道桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Segovia Aqueduct</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tarragona-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔拉戈纳古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarragona Roman Ruins</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ubeda-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌韦达古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Úbeda</p>
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
