import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '戈卢巴茨要塞 Golubac Fortress｜雄踞多瑙河铁门之巅的九塔传奇 - 最佳欧洲景点',
  description: '车子刚转过一个弯，多瑙河那沉静而磅礴的墨蓝色水面就毫无预兆地铺展在眼前。而它，戈卢巴茨要塞，就那么突然地、几乎是霸道地占据了整个视野。我的第一反应不是赞叹，而是屏住了呼吸。那感觉不像看到一座建筑，更像是目睹一头沉睡的巨兽——九座灰黄色的塔楼，像巨兽嶙峋的背脊，紧紧咬住陡峭的山岩，从水边一层层攀爬至山...',
}

export default function GolubacFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '戈卢巴茨要塞', href: '/attractions/golubac-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`戈卢巴茨要塞・Golubac Fortress・塞尔维亚・布拉尼切沃州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚转过一个弯，多瑙河那沉静而磅礴的墨蓝色水面就毫无预兆地铺展在眼前。而它，戈卢巴茨要塞，就那么突然地、几乎是霸道地占据了整个视野。我的第一反应不是赞叹，而是屏住了呼吸。那感觉不像看到一座建筑，更像是目睹一头沉睡的巨兽——九座灰黄色的塔楼，像巨兽嶙峋的背脊，紧紧咬住陡峭的山岩，从水边一层层攀爬至山巅，沉默地倒映在如镜的河面上。风从著名的“铁门”峡谷呼啸而来，带着河水湿润的腥气与岸边森林松针的冷冽味道，吹在脸上有种穿越时间的凛冽。耳边只有风声、水声，以及自己加快的心跳声。你瞬间就明白了，为什么古人要在这里修筑堡垒。这地方天生就带着一股睥睨天下的威严，扼守着河道最狭窄的咽喉，仿佛多瑙河到了这里，也不得不向这磐石般的意志低头。
走近了，感官的细节变得更加丰富。脚下是粗糙的沙石路，混合着从古老石墙上剥落的细小颗粒。阳光炙热，但在高耸塔楼的阴影里，温度骤降，能感觉到石头散发出的、积蓄了几个世纪的凉意。用手触摸城墙，那些巨大的石块表面坑洼不平，留着风雨侵蚀的痕迹，或许还有早已模糊的刀劈斧凿的印记。偶尔有飞鸟从塔楼的箭孔中窜出，翅膀拍打的声音在空荡的墙体间回响，更添几分孤寂。当地老人会坐在远处河边的长椅上，静静地望着要塞，对于他们而言，这不是一个景点，而是一个从小看到大的背景，是家乡的象征，是历史课本里那些遥远故事发生的、触手可及的舞台。
最打动人心的，是它那种未经完全驯服的野性魅力。它不像那些被精心修饰、铺满鲜花城堡。戈卢巴茨要塞是粗粝的、雄性的、带着伤痕的。它的魅力在于它的不完美——坍塌了一角的塔楼，墙上野蛮生长的灌木，无人踏足的阴暗甬道。它毫不掩饰自己作为战争机器的过去，每一块石头都在诉说关于守卫、围攻、鲜血与荣耀的往事。站在它的墙垛上，看着脚下宽阔的多瑙河静静流向远方，对岸罗马尼亚的青山清晰可见，你会感到一种浩瀚的时空感。千百年来，多少商船、军队、帝国从这里经过，而它始终在这里，像一个沉默的哨兵，看惯了潮起潮落，王朝兴替。这种恒久与坚固，在当今这个飞速变化的世界里，散发出一种直击人心的、安慰般的力量。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚转过一个弯，多瑙河那沉静而磅礴的墨蓝色水面就毫无预兆地铺展在眼前。而它，戈卢巴茨要塞，就那么突然地、几乎是霸道地占据了整个视野。我的第一反应不是赞叹，而是屏住了呼吸。那感觉不像看到一座建筑，更像是目睹一头沉睡的巨兽——九座灰黄色的塔楼，像巨兽嶙峋的背脊，紧紧咬住陡峭的山岩，从水边一层层攀爬至山巅，沉默地倒映在如镜的河面上。风从著名的“铁门”峡谷呼啸而来，带着河水湿润的腥气与岸边森林松针的冷冽味道，吹在脸上有种穿越时间的凛冽。耳边只有风声、水声，以及自己加快的心跳声。你瞬间就明白了，为什么古人要在这里修筑堡垒。这地方天生就带着一股睥睨天下的威严，扼守着河道最狭窄的咽喉，仿佛多瑙河到了这里，也不得不向这磐石般的意志低头。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，感官的细节变得更加丰富。脚下是粗糙的沙石路，混合着从古老石墙上剥落的细小颗粒。阳光炙热，但在高耸塔楼的阴影里，温度骤降，能感觉到石头散发出的、积蓄了几个世纪的凉意。用手触摸城墙，那些巨大的石块表面坑洼不平，留着风雨侵蚀的痕迹，或许还有早已模糊的刀劈斧凿的印记。偶尔有飞鸟从塔楼的箭孔中窜出，翅膀拍打的声音在空荡的墙体间回响，更添几分孤寂。当地老人会坐在远处河边的长椅上，静静地望着要塞，对于他们而言，这不是一个景点，而是一个从小看到大的背景，是家乡的象征，是历史课本里那些遥远故事发生的、触手可及的舞台。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是它那种未经完全驯服的野性魅力。它不像那些被精心修饰、铺满鲜花城堡。戈卢巴茨要塞是粗粝的、雄性的、带着伤痕的。它的魅力在于它的不完美——坍塌了一角的塔楼，墙上野蛮生长的灌木，无人踏足的阴暗甬道。它毫不掩饰自己作为战争机器的过去，每一块石头都在诉说关于守卫、围攻、鲜血与荣耀的往事。站在它的墙垛上，看着脚下宽阔的多瑙河静静流向远方，对岸罗马尼亚的青山清晰可见，你会感到一种浩瀚的时空感。千百年来，多少商船、军队、帝国从这里经过，而它始终在这里，像一个沉默的哨兵，看惯了潮起潮落，王朝兴替。这种恒久与坚固，在当今这个飞速变化的世界里，散发出一种直击人心的、安慰般的力量。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`戈卢巴茨要塞`} />
                <InfoRow label="英文名称" value={`Golubac Fortress`} />
                <InfoRow label="正式名称" value={`Golubac Fortress`} />
                <InfoRow label="国家" value={`塞尔维亚`} />
                <InfoRow label="城市" value={`布拉尼切沃州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是中世纪巴尔干地区最具战略意义的要塞之一，掌控着多瑙河上的“铁门”天险，是塞尔维亚王国抵抗奥斯曼帝国入侵的前线堡垒，也是东西方势力长达数百年拉锯战的直接见证者。`} />
                <InfoRow label="建筑特色" value={`由九座高低错落的塔楼组成的庞大防御体系，沿着多瑙河岸呈阶梯式分布，宛如一条石龙盘踞在山岩与水路之间，其独特的塔楼布局是为了最大化发挥弓箭与早期火器的交叉火力。`} />
                <InfoRow label="建筑风格" value={`融合了中世纪塞尔维亚、拜占庭和奥斯曼帝国的军事建筑特点，石砌工艺厚重粗犷，不同时期修建的塔楼在形态（方形、多边形）和建材上留有清晰的时代印记，反映了其多次易主和扩建的历史。`} />
                <InfoRow label="文化价值" value={`它不仅是军事工程的杰作，更是一部石头上镌刻的史诗，见证了欧洲东西方文明与帝国在此长达数百年的激烈碰撞与交融，是理解塞尔维亚民族坚韧精神与巴尔干复杂历史地理的一把关键钥匙。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月1日至10月31日）开放时间为每天上午9点至晚上8点；冬季（11月1日至3月31日）开放时间为每天上午10点至下午5点，逢周一闭馆维护。节假日开放时间可能临时调整，建议出行前在其官方网站或当地旅游信息中心核实。`} />
              <InfoRow label="门票价格" value={`成人票约700第纳尔（约合6欧元），学生及儿童票享有半价优惠（需出示有效证件）。6岁以下儿童免票。提供家庭套票（两位成人加两名儿童）优惠。门票包含要塞主体区域的参观，部分修复中的塔楼或特别展览可能需额外付费。`} />
              <InfoRow label="地址" value={`Golubačka tvrđava， Golubac， 12223， 塞尔维亚`} />
              <InfoRow label="交通方式" value={`从塞尔维亚首都贝尔格莱德出发是最佳选择。自驾是最灵活的方式，沿E75/E70高速公路向东行驶约130公里，转入464号公路直达要塞，车程约2小时。公共交通方面，贝尔格莱德主汽车站有前往戈卢巴茨镇的定期巴士，车程约2.5-3小时，但班次有限，尤其是下午回程车较少，务必提前查好时刻表。抵达戈卢巴茨镇后，要塞就在镇边多瑙河畔，步行约15-20分钟即可到达。若从罗马尼亚方向来，可经由“铁门大桥”过境，但需注意两国边境检查。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起戈卢巴茨的故事，你就不能只把它看作一堆石头，而得想象成一场持续了几个世纪的、关于“钥匙”的争夺战。这把钥匙，就是多瑙河上这道鬼斧神工的“铁门”峡谷。早在罗马时代，这里就是帝国的边疆。但真正让这座要塞登上历史舞台聚光灯下的，是中世纪那个风起云涌的巴尔干。14世纪初，塞尔维亚王国在斯特凡·拉扎列维奇的统治下如日中天，国力鼎盛。他们看中了这个天险，开始在此修筑坚固的堡垒，用以控制这条连接中欧与黑海的黄金水道，征收丰厚的过路费，并震慑对岸的匈牙利王国。最初的几座塔楼拔地而起，它们的设计纯粹而实用，高高的石墙，狭小的窗口，一切都为了防御。那时候，要塞上升起的是塞尔维亚的双头鹰旗帜，它象征着王国的财富与力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，平静总是短暂的。14世纪末，奥斯曼帝国的阴影如同地平线上不断聚集的乌云，缓缓笼罩了整个巴尔干。1389年科索沃战役的悲壮失利，虽然未能立即摧毁塞尔维亚，却彻底改变了地区的权力平衡。戈卢巴茨，这个前哨，瞬间变成了最血腥的绞肉机前线。关于它最早、也最传奇的一次围攻发生在1391年。故事说，奥斯曼苏丹巴耶济德一世的军队兵临城下，而守城的塞尔维亚贵族骑士们誓死不降。战斗最激烈时，甚至出现了骑士们最浪漫也最残酷的单挑决斗——一位名叫米洛什的塞尔维亚骑士，向奥斯曼军队中最骁勇的武士发起挑战，并在决斗中取胜，短暂提振了守军士气。但这些英勇的传说，终究挡不住历史的洪流。要塞在激烈的拉锯战中数次易手，今天属于塞尔维亚，明天就可能插上奥斯曼的新月旗。石头城墙在一次又一次的围攻中被投石机砸毁，又在休战期被匆忙加固，不同建筑风格的塔楼就是在这段时期杂乱地生长出来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间跳到15世纪，奥斯曼帝国最终稳固地占领了这里。但他们并没有摧毁这座要塞，而是进一步扩建和加固它，增加了更多适应火器时代的防御工事。有趣的是，在奥斯曼人统治的近四百年里，戈卢巴茨反而进入了一个相对“繁荣”的时期。它成了帝国边疆一个重要的行政和军事中心，商队依旧在此通行，只是收税的主人换了。城墙内不仅有士兵，还有工匠、小贩，甚至形成了一个小小的社区。你能从后来增添的那些带有奥斯曼特色的拱门和居住空间的痕迹里，想象出当时那种混杂着紧张与日常的边疆生活气息。直到1688年，奥地利哈布斯堡王朝的军队在“大土耳其战争”中一度夺回要塞，但最终还是得而复失。每一次争夺，都在它的躯体上留下新的伤疤和新的建筑层。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的“退役”发生在19世纪。随着火炮技术的飞跃发展，这种中世纪的要塞在军事上彻底失去了意义。奥斯曼帝国衰落后，塞尔维亚重新独立，戈卢巴茨要塞终于回到了塞尔维亚人手中，但它的军事使命已然终结。它被逐渐遗忘，任由风雨侵蚀，成为牧羊人避雨的地方和冒险家探索的废墟。这种被遗忘的状态，某种程度上反而保护了它，让它免遭大规模现代化改造的破坏，保留了那种沧桑的原真性。直到近几十年，人们才重新认识到它无与伦比的历史与景观价值，开始了缓慢而谨慎的修复与保护工程。今天，当我们漫步其中，指尖划过那些粗糙的石壁，实际上是在触摸一层又一层叠压在一起的历史——塞尔维亚的骄傲、奥斯曼的征服、战争的残酷、边疆的融合，所有这些故事，都凝固在这九座沉默的塔楼里，面朝多瑙，永不沉没。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你将拜访戈卢巴茨安排在下午稍晚的时候。为什么呢？首先，可以避开正午最毒辣的日头，要塞里遮阴处虽多，但攀登塔楼和城墙仍是体力活。其次，黄昏是这座要塞魔法时刻的开始，光线变得金黄柔润，将九座塔楼的影子长长地投射在多瑙河上，景色壮丽到令人窒息。整个深度游览大约需要3到4个小时，节奏可以从容不迫。我们的路线将从“远观”开始，逐步“走近”，最后“深入”其内部核心，像剥洋葱一样，一层层揭开它的秘密。这样的安排能让你逐步建立对要塞的感知，从宏观的震撼到微观的触动，获得最完整的体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对防滑、支撑性好的徒步鞋，要塞内的石阶被无数人踩踏得光滑无比，且常有沙土，非常容易滑倒。夏季请携带充足的饮用水和防晒用品，内部几乎没有遮荫售卖点，且反射阳光的石墙会让体感温度更高。尽量避开周末和塞尔维亚的公共假日，那时本地游客会非常多，可能影响你静静感受氛围的体验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在主停车场后先别急着进去，转身走到多瑙河岸边，找个长椅坐下来，静静地从侧面和远处欣赏要塞与峡谷构成的完整画面，让第一印象深深印入脑海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口进入，不要立刻攀登，而是沿着最底层的城墙慢慢走，用手感受石头的温度与纹理，仰头看看那些高不可攀的塔楼底部，体会作为进攻者面对它时的压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择登上位置最高、视野最开阔的那座主塔楼（通常是修复最完善、有楼梯可达的那一座），克服盘旋楼梯的眩晕，在塔顶的垛口边迎风而立，俯瞰整个“铁门”峡谷和多瑙河如丝带般蜿蜒远去。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从最高处下来后，故意钻进一条看起来昏暗无人的下层通道或地窖，打开手机手电，感受那种绝对的寂静与幽暗，想象数百年前士兵在此值守或藏匿的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到面向多瑙河的那段开阔城墙，靠在垛口上，什么都不做，就看河上的货船缓缓驶过，看对岸罗马尼亚的风景，等待日落的光线一点点染红塔楼的尖顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，探索一下要塞外围通往后方小山坡的步道，从另一个角度回望要塞的全貌，你常会发现一些意想不到的、构图完美的拍照角度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，务必去一趟位于入口附近的小型展览馆或信息中心，那里沙盘模型和历史图片能帮你把刚才看到的零散碎片，串联成一个完整的历史故事。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`多瑙河对岸罗马尼亚侧公路边的特定停车观景台`}</h4>
                  <p className="text-sm text-gray-700">{`需使用长焦镜头，在日落前约一小时，可以拍到要塞九个塔楼被金色夕阳勾勒出清晰轮廓、并完整倒映在平静河面上的对称全景，这是它最经典的角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`要塞西侧外围的山坡草地上`}</h4>
                  <p className="text-sm text-gray-700">{`清晨太阳初升时，阳光从背后照亮要塞，你可以以草地野花为前景，拍下要塞苏醒在晨雾与柔和光线中的生动场景，画面充满生机与层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`内部最高塔楼的顶层垛口`}</h4>
                  <p className="text-sm text-gray-700">{`将相机或手机探出箭孔，以箭孔为画框，拍摄框外多瑙河与峡谷的风景，这种“窥视”的视角极具代入感和故事感，仿佛穿越回哨兵的视角。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`底层某段幽深拱形门洞的内部`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，光线从门洞另一端射入，在古老的地面投下强烈的明暗分割线与光影造型，拍下人物行走其中的剪影，能突出建筑的几何美和历史深邃感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一枚24-70mm的标准变焦镜头和一枚70-200mm的长焦镜头，足以应对从宏伟全景到建筑细节的所有拍摄需求。拍摄岩石和城墙纹理时，尝试侧光拍摄，能让石头的质感与沧桑感加倍突出。使用无人机拍摄前，务必确认当地法规，并绝对避开人群，尊重其他游客的隐私与安全。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`戈卢巴茨镇上干净简单的家庭公寓，房东老奶奶通常会为你准备自制的果酱和早餐，晚上可以步行到河边，看对岸灯光勾勒出的要塞神秘剪影。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在多瑙河上的漂浮船屋旅馆，夜晚听着轻柔的水波拍打声入眠，清晨在甲板上就能看到被第一缕阳光染红的要塞，是独一无二的水上视角。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车半小时前往邻近的温泉小镇巴伊纳巴什塔，入住藏在森林里的高档温泉酒店，在体验完要塞的粗犷历史后，用天然的温泉水彻底舒缓身心。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居爱好`}</h4>
                  <p className="text-sm text-purple-800">{`预订要塞周边村庄里由传统石屋改造的精品民宿，拥有私密的小院子和眺望山谷的露台，享受绝对的宁静，白天可能只有鸟鸣和教堂钟声相伴。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`戈卢巴茨镇本身很小，住宿选择有限且条件相对基础，追求舒适和多样化体验的建议以巴伊纳巴什塔或更远的波扎雷瓦茨为基地。该地区治安良好，民风淳朴，但夏季预订务必提前，尤其是周末。许多特色民宿不通过大型国际平台预订，试着通过当地旅游网站或直接电话联系，可能会有惊喜。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开戈卢巴茨很久以后，我发现自己最常想起的，不是那张明信片般的全景照片，而是一种混合的感觉——是手指触碰粗砺石墙时的凉意，是站在塔顶时灌满衣袖的、带着河水气息的风，是夕阳下那片笼罩一切的金色宁静。它教会我的，是一种关于“坚韧”的具象化理解。这不是一个轻盈美好的童话城堡，它的每一道线条都写着生存、斗争和坚守。在当今这个常常追求光滑、快速、即时的世界里，戈卢巴茨像一块固执的、未曾打磨的原始矿石，提醒着我们：有些价值，比如对家园的守护，对天险的敬畏，对历史的承载，是需要用如此厚重、如此沉默的方式去实现的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你也厌倦了那些被过度包装、充斥着相似纪念品的旅游热点，渴望一次真正能触动心灵、连接土地的旅程，那么，请来戈卢巴茨吧。来这里，不是为了收集又一个“到此一游”的印章，而是为了让自己站在多瑙河的疾风中，站在那座见证了无数 empires come and go 的巨石堡垒上，重新感受时间的重量、地理的魄力，以及人类在历史洪流中留下的、那些无法被磨灭的痕迹。这不仅仅是一次观光，这是一次与欧洲十字路口之魂的对话。当你离开时，你会带走一些峡谷的风沙，和一份关于坚韧的、沉默的力量。这份记忆，远比任何精致的纪念品都更加珍贵。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/zemun-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    泽
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">泽蒙老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zemun Old Town</p>
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
              <a href="/attractions/subotica-art-nouveau-architecture" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    苏
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">苏博蒂察新艺术建筑群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Subotica Art Nouveau</p>
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
