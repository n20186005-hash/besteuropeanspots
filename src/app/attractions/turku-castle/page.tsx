import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '图尔库城堡 Turku Castle｜在北欧最古老城堡里触摸芬兰的“时间之石” - 最佳欧洲景点',
  description: '嘿，朋友，想象一下：你从图尔库热闹的市中心拐出来，沿着缓缓流淌的奥拉河走，空气里有种波罗的海特有的、微咸又清新的味道。然后，毫无预警地，一堵巨大、敦实、由暗红色砖块垒成的墙，就那样沉默地撞进你的视野。它没有阿尔卑斯山脚下城堡那种童话般的尖顶，也没有法国宫殿那种金光闪闪的傲慢。图尔库城堡给你的第一眼感...',
}

export default function TurkuCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '图尔库城堡', href: '/attractions/turku-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`图尔库城堡・Turku Castle・芬兰・图尔库`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下：你从图尔库热闹的市中心拐出来，沿着缓缓流淌的奥拉河走，空气里有种波罗的海特有的、微咸又清新的味道。然后，毫无预警地，一堵巨大、敦实、由暗红色砖块垒成的墙，就那样沉默地撞进你的视野。它没有阿尔卑斯山脚下城堡那种童话般的尖顶，也没有法国宫殿那种金光闪闪的傲慢。图尔库城堡给你的第一眼感觉，是重量。是一种历经了七八个世纪风雪、战争与时间冲刷后，沉淀下来的、实打实的物理重量和精神重量。那种粗犷的北欧气质，扑面而来。
走近了，你会发现它的“活”。这不只是一个供人参观的遗迹。在城堡前的空地上，可能正有当地家庭推着婴儿车散步，情侣坐在长椅上分享一个冰淇淋。城堡那深深的护城河（虽然现在没水了）沟壑，成了孩子们玩滑板车的坡道。它巨大、古老，却奇妙地嵌入了图尔库人日常生活的肌理里，不显突兀，就像一个沉默而可靠的祖父，始终坐在河边，看着城市一代代生长。
当你穿过厚重的拱形门洞，踏入内部庭院那一瞬，声音忽然被吸走了大半。外面河畔的风声、车声变得遥远，取而代之的是你自己脚步在石板地上的回响，空旷，清晰。光线从高高的四面围墙间投下来，让那些砖石的红色呈现出不同的层次——向阳处是温暖的砖红，背阴处则是一种接近深褐的暗红。空气里有股老建筑特有的、混合了石头、陈旧木材和一丝丝地下潮气的味道。那一刻你会觉得，你不是进入了一个“景点”，而是跌进了一个时间的琥珀里。芬兰数百年的历史、欢笑、阴谋、泪水，似乎都被凝固在这些砖石的缝隙里了。
这就是图尔库城堡最核心的魅力：它不试图用华丽取悦你，而是用一份惊人的坦诚和厚重来震撼你。它向你展示历史不只是书本上的故事，更是这些冰冷石头曾经感受过的温度，是墙面上每一道凿痕背后的意图。在这里，你能触摸到芬兰这个年轻国家最古老的那块“时间之石”。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下：你从图尔库热闹的市中心拐出来，沿着缓缓流淌的奥拉河走，空气里有种波罗的海特有的、微咸又清新的味道。然后，毫无预警地，一堵巨大、敦实、由暗红色砖块垒成的墙，就那样沉默地撞进你的视野。它没有阿尔卑斯山脚下城堡那种童话般的尖顶，也没有法国宫殿那种金光闪闪的傲慢。图尔库城堡给你的第一眼感觉，是重量。是一种历经了七八个世纪风雪、战争与时间冲刷后，沉淀下来的、实打实的物理重量和精神重量。那种粗犷的北欧气质，扑面而来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会发现它的“活”。这不只是一个供人参观的遗迹。在城堡前的空地上，可能正有当地家庭推着婴儿车散步，情侣坐在长椅上分享一个冰淇淋。城堡那深深的护城河（虽然现在没水了）沟壑，成了孩子们玩滑板车的坡道。它巨大、古老，却奇妙地嵌入了图尔库人日常生活的肌理里，不显突兀，就像一个沉默而可靠的祖父，始终坐在河边，看着城市一代代生长。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你穿过厚重的拱形门洞，踏入内部庭院那一瞬，声音忽然被吸走了大半。外面河畔的风声、车声变得遥远，取而代之的是你自己脚步在石板地上的回响，空旷，清晰。光线从高高的四面围墙间投下来，让那些砖石的红色呈现出不同的层次——向阳处是温暖的砖红，背阴处则是一种接近深褐的暗红。空气里有股老建筑特有的、混合了石头、陈旧木材和一丝丝地下潮气的味道。那一刻你会觉得，你不是进入了一个“景点”，而是跌进了一个时间的琥珀里。芬兰数百年的历史、欢笑、阴谋、泪水，似乎都被凝固在这些砖石的缝隙里了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是图尔库城堡最核心的魅力：它不试图用华丽取悦你，而是用一份惊人的坦诚和厚重来震撼你。它向你展示历史不只是书本上的故事，更是这些冰冷石头曾经感受过的温度，是墙面上每一道凿痕背后的意图。在这里，你能触摸到芬兰这个年轻国家最古老的那块“时间之石”。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`图尔库城堡`} />
                <InfoRow label="英文名称" value={`Turku Castle`} />
                <InfoRow label="正式名称" value={`Turku Castle`} />
                <InfoRow label="国家" value={`芬兰`} />
                <InfoRow label="城市" value={`图尔库`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是芬兰现存最古老、规模最大的中世纪城堡，见证了瑞典王国统治下的芬兰历史开端与变迁。`} />
                <InfoRow label="建筑特色" value={`一座由厚重红砖砌成的宏伟堡垒，融合了军事防御的粗犷与文艺复兴时期宫殿的典雅，如同一部立体的石头史书。`} />
                <InfoRow label="建筑风格" value={`主体为北欧中世纪防御城堡风格，后期增建部分带有明显的文艺复兴风格影响。`} />
                <InfoRow label="文化价值" value={`它不仅是博物馆，更是芬兰国家记忆的“原点”，承载了从战争、王权、贵族生活到现代国家认同的完整叙事。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但季节不同。旺季（5月至9月）通常为每天上午10点至下午6点。淡季（10月至次年4月）开放时间缩短，通常为周二至周日上午10点至下午4点，周一可能闭馆或缩短开放。重要节假日（如圣诞节、元旦、仲夏节）开放时间会有特殊调整，出行前务必查阅官网最新公告。`} />
              <InfoRow label="门票价格" value={`标准成人票价约为15欧元。学生、儿童及长者享有优惠票价，通常在10欧元左右。家庭套票（2成人+2儿童）性价比高，约为30-35欧元。持赫尔辛基旅游卡或图尔库城市卡可能享有折扣。城堡内部分特展或导览团可能需要额外付费。`} />
              <InfoRow label="地址" value={`Linnankatu 80, 20100 Turku, Finland`} />
              <InfoRow label="交通方式" value={`图尔库城堡交通极其便利。如果你是飞抵图尔库机场（TKU），乘坐机场巴士约15分钟即可到达市中心，再换乘本地巴士（多条线路如1路、61路等）在“Linnankatu”或“Turun linna”站下车，步行2分钟即到，全程约30-40分钟。若乘坐VR国铁抵达图尔库中央火车站，出站后步行穿过市中心，沿着奥拉河畔漫步约20分钟即可抵达，这是最推荐的体验方式。如果自驾，城堡附近设有收费停车场。市内公共交通票可在巴士上用现金或通过“Föli”手机应用购买。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从13世纪末说起。那时，芬兰还不是一个独立国家，这片遍布森林和湖泊的土地，是瑞典王国向东扩张的前沿。为了巩固统治、征收税款、并抵御来自东边（诺夫哥罗德，后来的俄罗斯）的潜在威胁，瑞典人在奥拉河口修建了这座最初的堡垒。它一开始就是个木头搭建的简陋据点，功能纯粹是军事的。你可以想象，在波罗的海凛冽的寒风里，第一批瑞典士兵和芬兰本地劳工，是如何在这片荒凉河岸打下第一根木桩的。那声音，大概就是芬兰被正式卷入北欧政治漩涡的开场锣鼓。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡命运的第一次重大转折，发生在16世纪，与一位传奇国王紧密相连：古斯塔夫·瓦萨。这位瑞典强权君主，在将瑞典带离卡尔马联合、走向独立强国的路上，也深刻重塑了这座城堡。他看中了图尔库作为东方门户的战略价值，于是投入巨资，将原本粗糙的防御工事，扩建、加固，并增添了大量文艺复兴风格的宫殿设施。城堡从一座单纯的兵营，变成了集军事、行政和王权象征于一体的豪华宫殿。正是在这个时期，那些我们今天看到的华丽宴会厅、国王套房开始出现。古斯塔夫·瓦萨的儿子，约翰公爵，曾长期居住于此，把城堡变成了一个充满文艺复兴文化气息的小宫廷。可以说，是瓦萨王朝给了这座城堡“身体”和“华服”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，城堡的故事里不只有国王，还有爱情与悲剧。17世纪初，城堡迎来了一对著名的贵族夫妇：伯爵佩尔·布拉赫和他的妻子克里斯蒂娜。布拉赫是当时的芬兰总督，一位学者型的统治者。他进一步美化了城堡内部，设立了图书馆，让这里不仅有刀剑声，也有了书卷气。但他的妻子克里斯蒂娜的故事更富戏剧性。传说她美丽而强势，在伯爵长期外出时，实际管理者城堡乃至整个地区的政务。关于她“铁腕”治理和奢华生活的流言四起。最终，他们的婚姻以破裂告终，克里斯蒂娜离开了城堡。这段往事为冰冷的石墙增添了一抹浓烈的情感色彩，让人看到在宏大的历史叙事下，个体命运的悲欢离合。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的“黄金时代”在17世纪末逐渐落幕。随着瑞典帝国重心转移，以及赫尔辛基的崛起，图尔库和它的城堡重要性下降。它先后被用作仓库、监狱，甚至在18世纪的一场大火中严重受损，一度沦为废墟。那种从巅峰坠落的荒凉感，曾长久地笼罩着这些厅堂。但芬兰人对它的感情并未消失。19世纪，民族觉醒的浪漫主义思潮兴起，这座最古老、见证了所有历史的城堡，自然成为了芬兰民族认同的重要象征。人们开始用新的眼光审视它，不是作为瑞典权力的遗迹，而是作为芬兰自身历史的起点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最近一次重大考验，是二战。图尔库在战争中遭到猛烈空袭，城堡也未能幸免，部分建筑被炸毁。但战后，芬兰人做出了一个了不起的决定：不是简单修复，而是进行了一场长达数十年的、极其精细的考古式修复与重建。他们像拼图一样，将散落的砖石找回，依据历史图纸和考古发现，让城堡重新“活”了过来。今天你看到的每一个房间、每一件陈列，都是这次伟大重生的成果。它从一个权力的堡垒，最终涅槃成为一个属于全体芬兰人民的、讲述自己故事的国立博物馆。这段历程本身，就是芬兰民族坚韧精神的最好注脚。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味图尔库城堡的厚重，我强烈建议你留出至少4到5个小时，并选择在上午十点开门时就抵达。这能让你避开午后可能出现的团队游客，享受一段与城堡独处的静谧时光。整体的游览节奏应该是“由外而内，由下而上，最后回归宁静”。从外部感受其宏伟体量开始，然后深入地下迷宫般的中世纪核心，再逐层向上，探索文艺复兴时期的华丽宫殿，最后在城堡教堂的静谧中收尾，如果体力允许，一定别错过塔楼的登顶。这样的路线，恰似一部从黑暗中世纪走向光明文艺复兴，再俯瞰今日全景的历史三部曲。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部房间众多且结构复杂，很容易错过一些隐蔽的楼梯或侧室，入口处拿一份免费的地图至关重要。许多展室没有暖气，即便是夏季，内部也阴凉潮湿，务必带上一件轻薄外套。部分最古老的螺旋楼梯非常陡峭狭窄，上下时请一定抓紧扶手，穿一双舒适防滑的鞋子比什么都重要。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的石桥与干涸的护城河，用手触摸城堡外墙那些被风雨侵蚀了数百年的冰凉红砖，感受最初的粗粝质感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口进入后，先别急着上楼，径直走下旋转石阶去探索阴凉而坚固的地下室与中世纪堡垒核心，那里有最古老的石墙和监狱遗迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到主层，踏入宏伟的“骑士大厅”，仰头看那巨大的木质穹顶和石砌壁炉，想象这里曾经举办过的盛大宴会与骑士集会。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着楼梯缓缓上行，逐一探访文艺复兴风格的国王与王后套房，留意房间里精美的仿古家具、织锦和瓷砖壁炉，感受王室生活的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过那个被称为“国王约翰与卡特琳娜大厅”的华丽长廊，巨大的窗户将奥拉河景框成一幅流动的油画，这里是城堡最美的观景点之一。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到位于三层的城堡小教堂，这个宁静的白色空间与外部厚重的防御工事形成鲜明对比，坐下来静静感受片刻的祥和。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀爬狭窄的螺旋楼梯登上城堡最高的塔楼，在呼呼的风声中，获得一个360度俯瞰图尔库老城、奥拉河入海口及群岛的壮阔全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在离开前，去城堡内的历史博物馆展厅系统地看看那些出土文物、模型和历史讲解，为你刚才的感官之旅补上知识的锚点。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`奥拉河对岸远景侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，从城堡西北侧的河对岸（Aurajoki河畔步行道）拍摄，能将城堡雄伟的侧影、河面倒影及偶尔经过的帆船一同纳入画面，构图饱满有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡内部庭院仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射庭院时，站在庭院中央，用广角镜头垂直向上拍摄，可以捕捉到四面高耸的红砖墙围合出的那一方极具几何感和压迫感的天空。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`骑士大厅的窗户光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的上午，当阳光斜射进骑士大厅南侧的高窗时，站在大厅中央过道的一端，拍摄光线在地板石砖上投下的长长窗影和光柱，充满历史感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`塔楼顶的环形全景`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔楼后，不要只拍远方，将相机镜头贴近塔楼边缘的砖石女墙，以厚重的历史砖石为前景框架，拍摄远处现代化的图尔库城市与河流，形成强烈的古今对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡室内大部分区域允许拍照，但禁止使用闪光灯和三脚架，这是为了保护脆弱的古物和壁画。拍摄人物与古老环境的结合时，试着让人物处于门廊、窗边等有自然光的位置，这样面部光线柔和，背景细节也能保留。尊重“禁止拍照”的标识，通常在一些特展厅或极其脆弱的木质内饰房间会有此规定。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`设计风河景之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在奥拉河畔的现代设计酒店，房间拥有整面的落地窗，晚上可以一边小酌一边欣赏对岸城堡被灯光点亮的魔幻夜景，步行到城堡仅十分钟。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心公寓体验`}</h4>
                  <p className="text-sm text-green-800">{`租住图尔库大教堂附近一栋老建筑里的自助式公寓，体验当地人“楼下是咖啡馆，楼上就是家”的闲适，感受古城生活脉搏，乘坐公交或悠闲散步去城堡都很方便。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城堡脚下的历史沉浸`}</h4>
                  <p className="text-sm text-yellow-800">{`选择一两家由老建筑改造的精品酒店或民宿，它们可能藏身于城堡周边的19世纪石头房子里，内部是北欧简约舒适风格，出门拐个弯就到了城堡护城河边。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`宁静郊外的庄园风情`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，可以考虑图尔库市郊、被森林和田野环绕的乡村庄园酒店，享受彻底的宁静、桑拿和有机早餐，开车进城探索城堡只需二十分钟，体验一种反差之美。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`图尔库夏季（6-8月）是旅游旺季，住宿紧张且价格较高，务必提前数月预订，尤其是周末。如果追求便利，选择“Portsa”或“Katedraalikeskus”附近的住宿，这是老城核心区，餐饮购物和交通都极其方便。芬兰住宿普遍价格不菲，但品质和清洁度极高，许多酒店都包含丰盛的北欧式自助早餐，这本身就是开启一天的美好方式。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开图尔库城堡很久以后，我脑子里反复回响的，不是某个具体的历史事件，而是一种感觉：那种时间以不同流速流淌的感觉。在城堡内部，时间仿佛是粘稠的、缓慢的，凝结在每一块砖石的寒意里；而当你登上塔楼，看见奥拉河上现代化的渡轮驶向远方群岛，风拂过耳边，时间又瞬间加速，奔流向未来。这座城堡最了不起的地方，就是它如此诚实、如此完整地呈现了这种时间的层次感。它不掩饰自己作为防御工事的冷酷，也不避讳自己曾作为监狱的阴暗，同时又能大方展示文艺复兴时期人们对美与舒适的追求。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切追求快速、光滑、即时的世界里，图尔库城堡像一块坚硬的、未曾被磨圆的巨石。它告诉你，历史不是单薄的教科书页，而是混杂着石头、铁器、木材、织物的复杂气味，是狭窄楼梯里幽暗的光线，是巨大厅堂里孤独的回音。它邀请你做的，不是“打卡”，而是“触摸”——用你的手、你的眼、你的想象力，去触摸一个民族记忆的起点。对于任何想真正理解北欧，理解芬兰为何是今天这个模样——低调、务实、坚韧又充满人文关怀——的旅人来说，这里不是起点，更是一个无法绕过的、深邃的坐标。它会让你之后看到的每一片芬兰森林、每一处宁静湖泊，都多出一份历史的重量与回响。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
