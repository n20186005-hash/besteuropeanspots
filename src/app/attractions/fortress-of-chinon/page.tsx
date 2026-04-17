import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '希农城堡 Fortress of Chinon｜圣女贞德觐见王太子之地与金雀花王朝最后堡垒 - 最佳欧洲景点',
  description: '第一眼看到希农城堡，你会忘记所有关于童话城堡的想象。它一点也不精致秀美，而是像一头灰黄色的、疲惫但依然警觉的巨兽，沉默地趴在岩石山脊上。通往城堡的路是蜿蜒的上坡，你的脚步会变得沉重，呼吸也会急促，仿佛在进行一场小小的朝圣。风很大，带着卢瓦尔河谷特有的、混合着河泥、葡萄藤与古老石头的气息，呼呼地穿过那...',
}

export default function FortressOfChinonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '希农城堡', href: '/attractions/fortress-of-chinon' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`希农城堡・Fortress of Chinon・法国・希农（安德尔-卢瓦尔省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到希农城堡，你会忘记所有关于童话城堡的想象。它一点也不精致秀美，而是像一头灰黄色的、疲惫但依然警觉的巨兽，沉默地趴在岩石山脊上。通往城堡的路是蜿蜒的上坡，你的脚步会变得沉重，呼吸也会急促，仿佛在进行一场小小的朝圣。风很大，带着卢瓦尔河谷特有的、混合着河泥、葡萄藤与古老石头的气息，呼呼地穿过那些城墙的巨大豁口。当你终于站在城堡的庭院，脚下是坑洼不平的石板，四周是仿佛被巨人啃噬过的、只剩骨架的高墙残骸，那种粗粝的、未经修饰的苍凉感会瞬间将你包裹。时间在这里不是平滑的流水，而是凝固的、有重量的岩石。
但奇妙的是，这份苍凉并不让人沮丧。阳光毫无遮挡地倾泻下来，在断壁上切割出锋利的光影。你靠着残存的墙垛向外望去，整个希农古镇的红瓦屋顶像温暖的绒毯铺在脚下，维埃纳河闪着银光，蜿蜒流向无尽的葡萄园。此时此刻，你忽然明白了这座城堡的灵魂。它早已不是王公贵族的私产，而是这座小镇、这片土地永恒的守望者。当地老人会在黄昏时牵着狗来城堡下的步道散步，年轻人会坐在城墙根下聊天。它坚硬的外壳下，是早已融入日常生活的温柔脉搏。
最打动人心的，是那种无处不在的“故事感”。这不是博物馆里被玻璃罩起来的历史，而是你可以用手触摸到的真实。当你走进库德雷堡那间名为“国事厅”的巨大厅堂，尽管屋顶早已消失，只剩四壁高墙直指蓝天，但你几乎能听到回声——1429年3月8日那个寒冷的夜晚，篝火噼啪作响，铠甲摩擦有声，一个来自洛林的乡下女孩，穿过满厅怀疑的贵族与士兵，径直走向隐藏在人群中的王太子，说出了那句改变历史的话：“Gentil Dauphin”（尊贵的王太子）。那一刻，信仰、勇气与政治的精密计算在这座石厅里碰撞出火花。希农城堡的魅力，就在于它完美封存了那样决定性的瞬间，并且慷慨地邀请每一个来访者，用想象力去亲自感受它。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到希农城堡，你会忘记所有关于童话城堡的想象。它一点也不精致秀美，而是像一头灰黄色的、疲惫但依然警觉的巨兽，沉默地趴在岩石山脊上。通往城堡的路是蜿蜒的上坡，你的脚步会变得沉重，呼吸也会急促，仿佛在进行一场小小的朝圣。风很大，带着卢瓦尔河谷特有的、混合着河泥、葡萄藤与古老石头的气息，呼呼地穿过那些城墙的巨大豁口。当你终于站在城堡的庭院，脚下是坑洼不平的石板，四周是仿佛被巨人啃噬过的、只剩骨架的高墙残骸，那种粗粝的、未经修饰的苍凉感会瞬间将你包裹。时间在这里不是平滑的流水，而是凝固的、有重量的岩石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但奇妙的是，这份苍凉并不让人沮丧。阳光毫无遮挡地倾泻下来，在断壁上切割出锋利的光影。你靠着残存的墙垛向外望去，整个希农古镇的红瓦屋顶像温暖的绒毯铺在脚下，维埃纳河闪着银光，蜿蜒流向无尽的葡萄园。此时此刻，你忽然明白了这座城堡的灵魂。它早已不是王公贵族的私产，而是这座小镇、这片土地永恒的守望者。当地老人会在黄昏时牵着狗来城堡下的步道散步，年轻人会坐在城墙根下聊天。它坚硬的外壳下，是早已融入日常生活的温柔脉搏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种无处不在的“故事感”。这不是博物馆里被玻璃罩起来的历史，而是你可以用手触摸到的真实。当你走进库德雷堡那间名为“国事厅”的巨大厅堂，尽管屋顶早已消失，只剩四壁高墙直指蓝天，但你几乎能听到回声——1429年3月8日那个寒冷的夜晚，篝火噼啪作响，铠甲摩擦有声，一个来自洛林的乡下女孩，穿过满厅怀疑的贵族与士兵，径直走向隐藏在人群中的王太子，说出了那句改变历史的话：“Gentil Dauphin”（尊贵的王太子）。那一刻，信仰、勇气与政治的精密计算在这座石厅里碰撞出火花。希农城堡的魅力，就在于它完美封存了那样决定性的瞬间，并且慷慨地邀请每一个来访者，用想象力去亲自感受它。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`希农城堡`} />
                <InfoRow label="英文名称" value={`Fortress of Chinon`} />
                <InfoRow label="正式名称" value={`The Royal Fortress of Chinon`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`希农（安德尔-卢瓦尔省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪欧洲权力博弈的关键舞台，既是英王亨利二世治下庞大的安茹帝国（金雀花王朝）的统治中心与心脏，也是1429年圣女贞德成功辨认并觐见未来法王查理七世，从而扭转百年战争局势的传奇之地。`} />
                <InfoRow label="建筑特色" value={`一座雄踞于陡峭岩山之上、俯瞰整个维埃纳河谷与希农古镇的庞大堡垒群，由不同时期修建的三座主体要塞（圣乔治堡、米利厄堡、库德雷堡）通过绵延近半公里的厚重城墙连接而成，气势恢宏。`} />
                <InfoRow label="建筑风格" value={`主要体现中世纪军事防御建筑的演变，从早期的罗马式风格到成熟的高卢-罗马与哥特式防御工事的结合，后期部分区域在文艺复兴时期进行了居住舒适性改造。`} />
                <InfoRow label="文化价值" value={`见证了从金雀花王朝的鼎盛与衰落，到英法百年战争末期法国民族意识觉醒的关键转折，是活生生的中世纪政治、军事与宫廷文化史教科书，被誉为“石头编年史”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡全年开放，但时间随季节变化显著。通常开放时间为：1月至3月、11月至12月，上午9:30至下午5:00；4月至6月、9月至10月，上午9:30至下午6:00；7月至8月，上午9:30至下午7:00。最后入场时间为关闭前一小时。请注意，城堡在1月1日、5月1日、11月1日、12月25日关闭，且每年1月可能会有为期两周的年度维护闭馆期，行前务必在其官网确认。`} />
              <InfoRow label="门票价格" value={`成人票10.5欧元。优惠票（学生、12-18岁青少年、教师等）8.5欧元。家庭套票（2成人+2儿童）32欧元。7岁以下儿童免费。门票包含所有可参观区域、历史展览以及一部非常值得观看的短片导览。提供多种语言的语音导览器，租金为3欧元。`} />
              <InfoRow label="地址" value={`Fortresse Royale de Chinon, 37500 Chinon, France`} />
              <InfoRow label="交通方式" value={`最便捷的交通枢纽是图尔（Tours）。从巴黎蒙帕纳斯火车站乘坐TGV高速列车至圣皮埃尔德科尔站（Saint-Pierre-des-Corps，紧邻图尔），车程约1小时15分钟，班次频繁。从图尔火车站或圣皮埃尔德科尔站，可搭乘TER地区列车前往希农站（Gare de Chinon），车程约50分钟，班次每日约8-10趟。从希农火车站步行至城堡山脚约15-20分钟（上坡路），也可在站前乘坐出租车（车程约5分钟）。若自驾，A85和A10高速公路均可方便抵达，城堡附近有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起希农的故事，必须从一个家族说起——金雀花王朝。12世纪中叶，这个通过联姻与征服建立起一个横跨英格兰和法国半壁江山（从苏格兰边境到比利牛斯山）的庞大“安茹帝国”的家族，急需一个大陆上的统治心脏。希农，这个位于维埃纳河畔、易守难攻的岩石高地，被亨利二世选中了。在他的经营下，这里从一座简单的要塞，变成了一个庞大的皇家宫殿兼堡垒复合体。你能想象吗？在12世纪末，这座城堡里不仅有军营和防御塔，还有宏伟的王室大厅、舒适的私人公寓、小教堂甚至一个皇家动物园。亨利二世在这里处理帝国政务，也在这里与他那传奇的儿子——“狮心王”理查和“无地王”约翰——上演着家庭权力斗争的连续剧。传说亨利二世就是在希农得知他最宠爱的儿子约翰也背叛了他，最终心碎而亡。金雀花王朝的辉煌与内部裂痕，都深深烙印在这些石头里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，帝国的荣耀如昙花一现。13世纪初，法国国王菲利普二世（奥古斯都）利用金雀花家族的内讧，发动攻势。1205年，在经过一场惨烈的围攻后，希农城堡落入法国王室手中。但城堡的命运并未就此平静。它成为了法国王室在卢瓦尔河谷的重要前哨。英法百年战争期间，由于法国北部大片领土被英军占领，位于相对安全的后方卢瓦尔河谷的希农，其战略地位再次凸显。当时的法国王太子查理（即后来的查理七世）被政敌讽刺为“布尔日的小国王”，他将宫廷迁至希农，这里成了风雨飘摇中法国王权的象征地。也正是在这里，他接到了关于一个声称受到上帝启示、要来拯救法国的乡村女孩的报告。在怀疑与绝望交织的氛围中，他决定见见她。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，历史性的会面发生了。关于贞德如何从人群中认出乔装的查理，后世有各种传说（有说查理故意躲藏，有说贞德受到神启）。但毫无疑问，这次会面说服了查理。他从一个犹豫不决的流亡者，转变为贞德事业的授权者。希农，成了贞德神圣使命获得官方认可的起点。城堡的石壁，见证了法国民族意识从王权危机中涅槃重生的关键时刻。此后，随着战争中心转移，城堡的军事地位逐渐下降。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`文艺复兴时期，城堡进行了一些改造，增加了更多窗户和居住空间，试图让它更宜居。但随后的宗教战争和法国大革命给了它沉重打击。它被用作监狱，然后被革命政府作为“封建象征”部分拆除、变卖，逐渐沦为被当地人取材的采石场，走向荒废。直到19世纪，在“历史遗迹”概念兴起后，它才被重视并得到保护。20世纪至今，持续不断的考古发掘和修复工程，小心翼翼地 stabilizing 这些废墟，让我们得以窥见它昔日的荣光与沧桑。它没有被重建为迪士尼般的完美城堡，而是被作为一个庄严、真实的历史遗址保存下来，这种“坦诚的残缺”，恰恰是其力量所在。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排至少3-4小时进行深度游览。最佳抵达时间是上午开门后不久（9：30左右），此时光线柔和，旅游团尚未大批抵达，你能享受到城堡废墟特有的静谧。游览节奏宜慢不宜快，这是一处需要用心感受而非“打卡”的地方。路线设计遵循从外到内、从全景到细节、按历史脉络探索的原则：先从外部领略其磅礴气势与地理优势，再深入堡垒内部，依次探索不同时期建造的三个主要堡垒（圣乔治堡、米利厄堡、库德雷堡），最后在国事厅遗址和塔楼博物馆沉浸于关键历史时刻。务必留出时间在城墙高处静静俯瞰小镇与河谷，这是体验城堡灵魂的重要部分。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部分通道和楼梯由古老的石头铺成，有些地方陡峭且不平，务必穿着舒适防滑的鞋子，女士尽量避免高跟鞋。夏季城堡上几乎没有遮荫处，且岩石反射阳光会非常炎热，请务必携带充足饮用水、戴上帽子和太阳镜，并做好防晒。语音导览器内容非常丰富，强烈建议租借，它能将眼前的废墟“激活”，告诉你每一块石头背后的故事，否则可能会错过许多精彩细节。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古镇中心沿着标志清晰的“皇家堡垒”路标，穿过迷人的中世纪街道，开始一段缓慢但充满期待的上坡步行，最终抵达城堡山脚下的主入口和售票处。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡后不要急于冲向建筑，先向左转前往东侧的观景平台，那里是拍摄城堡全景、俯瞰维埃纳河与整个希农古镇红色屋顶的绝佳位置，能立刻理解其战略价值。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随后沿着清晰的指示路径，首先探索最东端的圣乔治堡遗址，这里曾是王室住所，如今虽只剩地基与部分墙垣，但规模仍令人惊叹，试着想象当年王室生活的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过一道长长的、有顶的城墙步道（这段路本身就极具中世纪氛围）向西行进，前往中间的米利厄堡，这里是军事防御的核心区域，仔细观看厚重城墙的构造、箭孔和防御塔的布局。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在米利厄堡的中心地带，找到通往地下“皇家房间”的入口，沿着陡峭的楼梯下行，参观那些利用岩壁开凿出的、阴凉而神秘的房间，包括传说是关押圣殿骑士团领袖的地牢。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`接着前往最西端也是保存相对最完好的库德雷堡，直奔其核心——露天的“国事厅”遗址，站在大厅中央，环视四周高耸的石壁，闭上眼睛聆听风声，想象圣女贞德觐见的历史场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完国事厅后，不要错过库德雷堡塔楼内的历史展览，通过精美的模型、出土文物和多媒体短片，系统性地梳理从金雀花王朝到百年战争的城堡历史，让之前的感性认识得到理性的巩固。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，沿着城堡北侧的城墙步道慢行一圈，从不同角度欣赏堡垒的雄姿与下方河谷的景色，在途中寻找那些长椅坐下歇脚，让历史的厚重感与眼前的宁静风光慢慢沉淀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡东侧外围的葡萄园小径`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，从这里可以以广角镜头捕捉到整个城堡建筑群雄踞山巅的壮丽侧影，暖金色的夕阳会为灰黄色的石头镀上神圣的光辉，前景的葡萄藤能增加层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`库德雷堡“国事厅”内仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光垂直照射时，站在大厅一角，将镜头对准高耸的、没有屋顶的墙壁和蓝天，利用强烈的明暗对比和几何线条，拍出极具张力和历史沧桑感的极简构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`连接圣乔治堡与米利厄堡的城墙步道内部`}</h4>
                  <p className="text-sm text-gray-700">{`选择阳光能从侧面箭孔射入的时段（上午或下午），捕捉光线在悠长、幽暗的通道石壁上形成的一道道光束，人物可以作为一个剪影走在光中，故事感十足。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从希农古镇老桥（Pont de Chinon）上远眺`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，使用长焦镜头，将城堡、山体、河面以及桥体的线条一并纳入画面，能拍出宛如古典油画般层次丰富、宁静深远的全景照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`米利厄堡防御塔的箭孔窗口`}</h4>
                  <p className="text-sm text-gray-700">{`将镜头贴近冰凉的石头箭孔，将其作为天然画框，框住远处维埃纳河畔的房屋、河流与远山，创作一幅“窥见历史与当下”的创意构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄城堡全景前，务必查询法国当地的最新无人机法规，历史文化遗址上空常有飞行限制。城堡内部允许摄影，但请勿使用闪光灯照射古老的壁画遗迹（如有）或对文物造成潜在损害。尊重其他游客，在像国事厅这样具有特殊历史意义的地点拍照时，保持肃穆安静，避免喧哗打扰他人的沉思体验。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古镇中心的历史宅邸`}</h4>
                  <p className="text-sm text-blue-800">{`选择一栋由15世纪石木结构房屋改造的精品酒店，房间有暴露的原始横梁和壁炉，晚上能听到远处城堡传来的隐约钟声，清晨推开木窗就是满是鲜花的小广场。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河畔宁静客栈`}</h4>
                  <p className="text-sm text-green-800">{`住在维埃纳河对岸一家家庭经营的舒适客栈，房间窗户正对城堡全景，尤其是夜晚城堡被灯光打亮时，景色如梦似幻，早晨可以在河边花园享用包含自制果酱的早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`葡萄园环绕的乡村民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车片刻抵达城堡附近山丘上的独立农舍，房东可能本身就是葡萄农，住宿体验包括品尝他们的家庭酒窖藏品，在星空下的庭院里，听着虫鸣，远眺黑暗中城堡的隐约轮廓。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端历史庄园`}</h4>
                  <p className="text-sm text-purple-800">{`下榻一座位于古镇边缘、拥有私家花园和泳池的18世纪贵族庄园酒店，将古典奢华与现代化舒适完美结合，仿佛体验了一次从城堡统治者到庄园贵宾的身份转换。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`希农是著名的葡萄酒产区，许多民宿和酒店都与当地酒庄有联系，可以询问房东能否安排私人酒窖参观或品酒体验，这是深入本地文化的绝佳方式。古镇面积不大，大部分住宿步行至城堡山脚都在15分钟范围内，但预订时仍需确认具体位置，因为有些“希农”地址可能位于更远的郊区。夏季（7-8月）和节假日务必提前数月预订，这个小镇在旅游旺季非常受欢迎。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开希农城堡时，我的手里没有精美的纪念品，只有满心的肃穆和一丝挥之不去的苍凉。但这种感觉并非消极，更像是一次彻底的精神淋浴，洗掉了许多现代的浮华与焦虑。在断壁残垣间漫步的几小时里，你被迫慢下来，去观察石头的纹理，去聆听风声的语调，去想象几个世纪前同样走过这里的人们的呼吸与心跳。这座城堡以其毫不掩饰的残缺，告诉我们一个真理：最坚固的石头也会崩裂，最辉煌的帝国终将逝去，但那些发生在这些时空里的关于勇气、信仰、野心与爱恨的故事，却比石头更持久。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求快速、崭新、光鲜的世界里，希农城堡像一位沉默的智者，提供了一种截然不同的价值。它不讨好你，不让你轻松，甚至有些“不方便”。但它给予的，是真实的重量和时间的深度。它让你明白，历史不是教科书上扁平的文字，而是立体的、可触摸的、有温度的存在。每一位热爱深度游的旅人，都应该来这里站一站。不是为了拍一张标准的打卡照，而是为了让自己沉浸在一种宏大的叙事里——关于权力如何兴起与坠落，关于个体如何在历史的十字路口挺身而出，关于一切坚固的东西如何烟消云散，而精神又如何能在废墟上获得重生。这趟旅程，最终会成为一次对自己内心的叩问。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/beziers-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝兹道城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Béziers Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chartres-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙特尔大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chartres Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/albi-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔比主教座堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Albi Cathedral</p>
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
