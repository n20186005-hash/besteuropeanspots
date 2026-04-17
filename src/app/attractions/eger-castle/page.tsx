import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃格尔城堡 Eger Castle｜聆听石头低语英雄史诗，品味地窖的“公牛血” - 最佳欧洲景点',
  description: '爬上那条蜿蜒的、被无数鞋底磨得温润发亮的石板坡道，第一个迎接你的，不是城堡巍峨的城墙，而是一股混合着干燥石粉、远处飘来的咖啡香，还有一丝若有若无的葡萄酒醇厚气息的独特味道。阳光斜斜地打在厚重的城墙上，把赭石色的砖石晒得发烫，摸上去，能感受到历史沉淀下来的温度，而不是冰冷的石头。抬起头，你会看到匈牙利...',
}

export default function EgerCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '埃格尔城堡', href: '/attractions/eger-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃格尔城堡・Eger Castle・匈牙利・埃格尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`爬上那条蜿蜒的、被无数鞋底磨得温润发亮的石板坡道，第一个迎接你的，不是城堡巍峨的城墙，而是一股混合着干燥石粉、远处飘来的咖啡香，还有一丝若有若无的葡萄酒醇厚气息的独特味道。阳光斜斜地打在厚重的城墙上，把赭石色的砖石晒得发烫，摸上去，能感受到历史沉淀下来的温度，而不是冰冷的石头。抬起头，你会看到匈牙利红白绿三色旗在城堡主塔楼上猎猎作响，那声音在空旷的庭院里显得格外清晰，仿佛在为几个世纪前那场惊天动地的战事做着永不间断的旁白。
这里绝不仅仅是一个供人参观的“景点”。它是埃格尔跳动的心脏，是市民的后花园。你会看到慢跑者沿着城墙根挥汗如雨，情侣坐在古老的炮筒边分享一个冰淇淋，老爷爷带着孙儿指着城墙上的弹坑讲述“公牛血”的传说。城堡脚下的斜坡草坪，在午后总会躺满晒太阳的人，仿佛这座曾经的军事堡垒，如今最艰巨的任务就是守护这份平凡的惬意。那种感觉奇妙极了，肃穆的历史与鲜活的生活，在这里没有丝毫隔阂。
最打动人心的，是那种浸透在每一块砖石里的英雄气与烟火气的交织。你可以在阴冷的地道里想象当年守军浴血奋战，转身就能在城堡地窖改建的小酒馆里，用一支铜质的小酒管，从巨大的橡木桶中吸吮一口同样以“公牛血”为名的醇香美酒。历史在这里不是教科书上扁平的文字，它是一种可以触摸的粗糙质感，一种可以品味的复杂香气，一种回响在耳边的、混合了昔日的喊杀与今日欢笑的交响。这座城堡教会你的，不是征服的荣耀，而是坚守的尊严，以及劫难过后，生活如何像藤蔓一样，重新顽强地爬满废墟，开出新的花朵。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`爬上那条蜿蜒的、被无数鞋底磨得温润发亮的石板坡道，第一个迎接你的，不是城堡巍峨的城墙，而是一股混合着干燥石粉、远处飘来的咖啡香，还有一丝若有若无的葡萄酒醇厚气息的独特味道。阳光斜斜地打在厚重的城墙上，把赭石色的砖石晒得发烫，摸上去，能感受到历史沉淀下来的温度，而不是冰冷的石头。抬起头，你会看到匈牙利红白绿三色旗在城堡主塔楼上猎猎作响，那声音在空旷的庭院里显得格外清晰，仿佛在为几个世纪前那场惊天动地的战事做着永不间断的旁白。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里绝不仅仅是一个供人参观的“景点”。它是埃格尔跳动的心脏，是市民的后花园。你会看到慢跑者沿着城墙根挥汗如雨，情侣坐在古老的炮筒边分享一个冰淇淋，老爷爷带着孙儿指着城墙上的弹坑讲述“公牛血”的传说。城堡脚下的斜坡草坪，在午后总会躺满晒太阳的人，仿佛这座曾经的军事堡垒，如今最艰巨的任务就是守护这份平凡的惬意。那种感觉奇妙极了，肃穆的历史与鲜活的生活，在这里没有丝毫隔阂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种浸透在每一块砖石里的英雄气与烟火气的交织。你可以在阴冷的地道里想象当年守军浴血奋战，转身就能在城堡地窖改建的小酒馆里，用一支铜质的小酒管，从巨大的橡木桶中吸吮一口同样以“公牛血”为名的醇香美酒。历史在这里不是教科书上扁平的文字，它是一种可以触摸的粗糙质感，一种可以品味的复杂香气，一种回响在耳边的、混合了昔日的喊杀与今日欢笑的交响。这座城堡教会你的，不是征服的荣耀，而是坚守的尊严，以及劫难过后，生活如何像藤蔓一样，重新顽强地爬满废墟，开出新的花朵。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃格尔城堡`} />
                <InfoRow label="英文名称" value={`Eger Castle`} />
                <InfoRow label="正式名称" value={`Eger Castle`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`埃格尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`匈牙利北方最重要的军事要塞之一，是1552年以少胜多、成功抵御奥斯曼帝国大军围攻的英雄主义象征。`} />
                <InfoRow label="建筑特色" value={`一座融合了中世纪军事防御工事、文艺复兴宫殿遗迹和近代修复建筑的庞大城堡建筑群，雄踞于城市中心的山丘之上。`} />
                <InfoRow label="建筑风格" value={`主要为哥特式与文艺复兴风格混合，并带有奥斯曼占领时期的影响和19世纪后的历史主义修复痕迹。`} />
                <InfoRow label="文化价值" value={`它不仅是匈牙利民族坚韧精神的丰碑，其地下酒窖网络也见证了当地独特的葡萄酒文化，是历史与生活交融的活态遗址。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡区（外围）全年全天开放。城堡博物馆、地牢和地道等内部设施开放时间复杂：4月至10月，周二至周日10:00-18:00开放，周一闭馆；11月至次年3月，周二至周日10:00-16:00开放，周一闭馆。具体展厅（如蜡像馆、造币厂）可能有独立时间。冬季部分地下区域可能关闭。重大节日如8月20日（匈牙利国庆日）可能有特别庆典活动并延长开放。`} />
              <InfoRow label="门票价格" value={`参观分为多种组合票。基础城堡博物馆门票约1500匈牙利福林（约4欧元）。包含博物馆、地牢、蜡像馆和造币厂的通票约3500福林（约9欧元）。地道探险需单独购票或包含在高级通票内，约2000福林。学生、老人、家庭享有折扣，6岁以下儿童免费。匈牙利国家博物馆通票在此有效。建议官网查询最新价格。`} />
              <InfoRow label="地址" value={`Eger, Vár 1, 3300 Hungary`} />
              <InfoRow label="交通方式" value={`最近的主要机场是布达佩斯李斯特·费伦茨国际机场（BUD）。从布达佩斯出发最便捷的方式是乘坐火车：在布达佩斯东站（Keleti pu）乘坐直达埃格尔的列车，车程约2-2.5小时，每天约有10班。抵达埃格尔火车站后，出站便是多博·伊什特万广场，城堡就在肉眼可见的山丘上。你可以选择：1）步行上山，沿着标志清晰的“Vár”路牌，穿过美丽的老城街道和坡道，约15-20分钟；2）在山脚下的Dobó István tér广场乘坐小巴士（“Vár”摆渡车），几分钟即可抵达城堡入口。自驾可将车停在山脚下的公共停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从13世纪中叶讲起。蒙古铁骑如旋风般席卷了匈牙利平原，所到之处尽成焦土。惨痛的教训让当时的国王贝拉四世发起了轰轰烈烈的“城堡修筑运动”，埃格尔这座战略要冲的山丘，自然成了重点工程。最初的木制堡垒拔地而起，后来逐渐被石墙所取代。但真正让埃格尔城堡的名字刻进欧洲史册的，是16世纪那场令人窒息的乌云——奥斯曼帝国的扩张。苏莱曼大帝的大军势如破竹，1526年莫哈奇战役的惨败，让匈牙利王国覆灭，中部国土沦陷。埃格尔，成了北方抵抗战线最前沿的盾牌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`命运的齿轮转到1552年。一支超过四万人的奥斯曼大军，带着重型攻城炮，兵临埃格尔城下。而城内的守军，在城堡司令多博·伊什特万的率领下，只有区区2000多人，其中还包括许多妇女、市民甚至修士。绝望的兵力对比，让所有人都认为沦陷只是时间问题。但奇迹发生了。多博·伊什特万不仅是位勇士，更是位心理学家和宣传家。他深知，守住城堡的关键，是守住人们的信念。他利用错综复杂、多达十五公里的地下网络（有些甚至是更古老的地窖）进行机动防御，神出鬼没地打击敌人。他让战士们痛饮本地深色的混酿葡萄酒以壮胆色，酒浆染红了胡须，被惊恐的土耳其人传说成“匈牙利人喝了公牛血”，从而士气大振——“公牛血”葡萄酒的神话就此诞生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`坚守了整整38个昼夜后，损失惨重的奥斯曼军队不得不耻辱地撤退。这场胜利像一道闪电，照亮了当时阴霾密布的欧洲，极大地鼓舞了基督教世界的士气。埃格尔城堡，一战封神。然而，历史的吊诡在于，英雄主义并没能永远挡住时代的洪流。近一个世纪后的1687年，城堡最终还是在奥斯曼大军再次的长期围攻下陷落了。土耳其人统治了这里近一个世纪，他们在城堡内修建了清真寺和澡堂，也给这座建筑留下了另一重文化的印记。直到17世纪末，哈布斯堡王朝的军队才重新夺回埃格尔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`光荣与陷落，建设与破坏，构成了城堡的往复循环。18世纪后，随着军事技术的进步，城堡的战略价值下降，逐渐荒废，甚至被用作采石场，许多石材被拆去修建城内的民居和教堂，令人扼腕。你如今看到的很多规整部分，其实是19世纪民族复兴时期，怀着浪漫爱国情怀的建筑师们进行的“修复”与重建。这种修复或许不够“原汁原味”，但它本身也成了一段历史，反映了匈牙利民族在寻找自身身份认同过程中，对英雄时代的精神追溯与想象。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的游览应该从清晨开始，用完整的一天来消化这座城堡的厚重。建议9点半左右抵达城堡山脚，这时旅行团大部队尚未到来，阳光柔和。整体游览需要5-6小时，节奏应是“先外后内，先上后下，最后用美酒收尾”。上午先探索开阔的城堡庭院、城墙和露天遗迹，感受宏观气势和光线；中午前后进入室内博物馆，避开日头最烈的时候，系统地了解历史；下午进行最刺激的地道探险；最后在日落时分，留出充足时间给城堡地窖的酒馆，让历史的味道在舌尖沉淀。这样的安排张弛有度，体验完整。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`地道探险有固定的导览批次且人数有限，强烈建议一进城堡就先到售票处查询并预订最近的一场，否则很可能错过。参观地道请务必穿着防滑的封闭鞋子，内部常年阴冷，最好带一件薄外套。城堡区域地面多为不平整的石板和老砖，穿一双舒适耐走的鞋子比什么都重要。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从Dobó广场出发，别急着坐车，顺着蜿蜒的“Vár utca”石板路慢行上山，用脚步丈量古城的坡度，路过那些色彩柔和的巴洛克民居。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正门“英雄门”进入城堡主庭院，先别进博物馆，径直向右穿过拱门，走上北侧的城墙步道，从这里你能获得俯瞰整个埃格尔老城红色屋顶海洋的第一个全景视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡宫（Palota）内的多博·伊什特万博物馆，花时间细细观看那些出土的武器、铠甲，特别是那幅描绘1552年守城战的巨型环形壁画，它会让你瞬间置身于历史的漩涡中心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要参加定时导览的地道之旅，戴上安全帽，钻进阴凉狭窄、弥漫着泥土气息的地下迷宫，亲手触摸那些几百年前挖掘的粗糙岩壁，想象守军在此穿梭的紧张。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从地道另一端的出口钻出来，仿佛重见天日，这时去探索露天区域的考古遗址，包括残存的中世纪宫殿地基和那座被改为教堂的奥斯曼时期清真寺尖塔基座。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着东侧的城墙慢慢踱步到城堡的制高点——圆形棱堡，这里架设着几门复制的古老火炮，你可以像当年的炮手一样，瞄准远处虚拟的敌军阵地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将最悠闲的时光留给城堡地窖改建的葡萄酒馆，在昏暗的石室中，用传统的“deci”小酒杯品尝至少三种不同等级的埃格尔公牛血，让酒香在历史的空间里发酵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在傍晚时分回到主庭院，坐在长椅上，看夕阳把整个城堡建筑群染成金黄，等待灯光次第亮起，感受喧嚣退去后，石头本身讲述的宁静故事。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`北侧城墙中段方形塔楼处`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，阳光从西侧打亮老城建筑，利用城墙的垛口作为前景框架，可以拍出层次感极强的“古城守护者”视角照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡正门（英雄门）内侧拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光能斜射入门洞，站在门内向外拍，可以拍到光线切割出的明暗对比，以及门外绿树成荫的坡道，构图极具纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圆形棱堡的火炮旁`}</h4>
                  <p className="text-sm text-gray-700">{`以古老的铜炮为前景焦点，将对焦放在远处的平原或城市景观上，能拍出极具故事性和历史感的画面，最佳光线在晴朗的傍晚。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`地下酒馆的石室角落`}</h4>
                  <p className="text-sm text-gray-700">{`将相机白调至钨丝灯模式或使用暖色滤镜，借助酒馆本身的昏暗灯光和烛台，拍摄橡木酒桶、铜质酒管与玻璃酒杯的静物组合，氛围感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从山脚下塞切尼街抬头仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，从老城街道仰望，可以拍到城堡雄踞山巅的完整轮廓，结合街边的路灯或行人剪影，能展现城堡与日常生活的紧密关系。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机在城堡上空拍摄需格外谨慎，最好事先查询匈牙利当地的无人机法规并征求管理方同意。在博物馆内部和地下地道中，请务必遵守禁止使用闪光灯的规定，保护珍贵的壁画和脆弱的环境。拍摄当地人或酒馆里的酒保时，一个微笑和事先简单的手势询问，会让他们更乐意成为你镜头中的风景。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在城堡山脚下老城中心的某栋18世纪巴洛克宫殿改建的精品酒店，高高的天花板上装饰着壁画，推开木格窗就能闻到楼下咖啡馆飘来的香气。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`温泉疗愈之选`}</h4>
                  <p className="text-sm text-green-800">{`埃格尔以温泉闻名，选择一家拥有露天温泉浴池的酒店，在探索城堡累了一天之后，让富含矿物质的温暖泉水舒缓你的双腿，仰望星空时还能看见城堡的灯光。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园诗意之选`}</h4>
                  <p className="text-sm text-yellow-800">{`住在埃格尔郊区某个家族经营的葡萄酒庄民宿，房间窗外就是连绵的葡萄园，早晨被鸟鸣唤醒，主人会邀请你共进早餐并品尝他们自酿的“公牛血”。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`简约便利之选`}</h4>
                  <p className="text-sm text-purple-800">{`埃格尔火车站附近有几家现代设计的公寓式酒店，空间宽敞带小厨房，交通极其便利，适合自驾或预算有限的家庭旅行者，去城堡也有直达公交。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（尤其是7-8月音乐节期间）和葡萄酒收获季（9-10月）是埃格尔的绝对旺季，住宿务必提前数月预订。老城区的酒店虽有情调，但停车位可能紧张且昂贵，自驾者需确认停车安排。总体而言，埃格尔是一个非常安全、宁静的旅游小城，夜间漫步也令人安心。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃格尔城堡时，我的背包里沉甸甸的，不仅多了两瓶“公牛血”，更装满了一种复杂的情绪。那不是单纯的怀古幽情，而是一种对“坚韧”的具象化理解。这座城堡没有新天鹅堡那样的童话仙气，也没有凡尔赛宫那样的极致奢华，它的美是粗粝的、伤痕累累的，却因此更加真实有力。它告诉你，英雄不是战无不胜的神话，而是明知可能失败，却依然选择站在城墙之上的凡人。那份勇气，化作了石头里的记忆，也化作了葡萄藤里的甘醇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个快速迭代、追求浮光掠影的时代，埃格尔城堡像一位沉默的智者。它提醒我们，有些价值需要长久的坚守，有些味道需要时间的沉淀。来这里，不是为了打卡一张照片，而是为了完成一次对话——与历史对话，与勇气对话，最终与那个在平凡生活中，也可能需要一点“公牛血”般炽热信念的自己对话。这就是为什么，每一位渴望在旅行中找到精神共鸣的深度探索者，都应该来埃格尔，摸一摸这些温暖的石头，喝一口地窖里的酒，听听风穿过城墙孔洞时，那绵延了五个世纪的、低沉而骄傲的回响。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sopron-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    肖
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">肖普朗老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sopron Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/szentendre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣安德烈（艺术小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Szentendre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vac-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦茨大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vác Cathedral</p>
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
