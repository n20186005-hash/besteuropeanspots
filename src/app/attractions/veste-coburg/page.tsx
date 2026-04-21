import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科堡要塞 Veste Coburg｜俯瞰弗兰肯的千年王冠与马丁·路德庇护所 - 最佳欧洲景点',
  description: '还记得我第一次抬头望见它的那种压迫感吗？它不是童话里那种尖顶灵巧的城堡，而是一头雄踞在陡峭山丘上的巨石巨兽，灰褐色的城墙沿着山脊线野蛮生长，几乎吞没了整个山顶的轮廓。你从科堡老城那些色彩柔和的桁架房屋间走出来，一抬头，视线就被它完全霸占。脚下的路开始倾斜，空气变得清冽，周围是沙沙作响的山毛榉和冷杉林...',
}

export default function VesteCoburgPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '科堡要塞（弗兰肯的王冠）', href: '/attractions/veste-coburg' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科堡要塞（弗兰肯的王冠）・Veste Coburg・德国・科堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还记得我第一次抬头望见它的那种压迫感吗？它不是童话里那种尖顶灵巧的城堡，而是一头雄踞在陡峭山丘上的巨石巨兽，灰褐色的城墙沿着山脊线野蛮生长，几乎吞没了整个山顶的轮廓。你从科堡老城那些色彩柔和的桁架房屋间走出来，一抬头，视线就被它完全霸占。脚下的路开始倾斜，空气变得清冽，周围是沙沙作响的山毛榉和冷杉林，松针和湿润泥土的气息混合着远处飘来的隐约咖啡香。攀登的过程本身就是一场朝圣，你的喘息声和踩在古老石阶上的脚步声，都在提醒你，这座要塞从来就不是为了舒适而建的。
当你终于穿过最后一道坡，站在巨大的双塔主门——“荣誉之门”前，触摸着那些被无数风雨和岁月打磨得冰冷而粗糙的砂岩块时，会瞬间明白它为什么被称为“弗兰肯的王冠”。它不是装饰，是权力的实体化。但有趣的是，如今环绕它的不是士兵，而是推着婴儿车的本地家庭、慢跑的老人和拿着素描本的学生。周末的下午，城堡脚下的草坪上总会有人躺着晒太阳，这座曾经的军事堡垒，早已融入了科堡人日常生活的背景，像一个沉默而可靠的祖父，守护着山下的万家灯火。
走进内庭，那股混杂着历史尘埃、老木头和一丝淡淡霉味的独特气息扑面而来。空间豁然开朗，你会发现自己被不同时代的建筑立面所包围：一侧是庄严的文艺复兴宫殿，巨大的窗户仿佛洞察一切的眼睛；另一侧是厚重的中世纪城墙，留着火炮轰击的模糊痕迹。风声在这里变得不同，它在塔楼间呼啸，在拱廊下回旋，仿佛在低语着几个世纪以来的秘密。最打动人的是那种强烈的“层次感”，你不仅能看到建筑风格的叠加，更能感受到权力、信仰、艺术与家族命运在这里层层沉淀。
而它的核心魅力，或许就在于这种“反差”。它既是坚不可摧的武力象征，又曾是欧洲思想最动荡时期一位修道士的宁静书斋；它既是冷冰冰的石头堡垒，内部却收藏着丢勒、克拉纳赫笔下极致精美与人性化的艺术。这种钢铁与丝绸、战争与人文的并存，让科堡要塞不再仅仅是一个景点，而是一部你可以走进去的、立体的欧洲史书。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还记得我第一次抬头望见它的那种压迫感吗？它不是童话里那种尖顶灵巧的城堡，而是一头雄踞在陡峭山丘上的巨石巨兽，灰褐色的城墙沿着山脊线野蛮生长，几乎吞没了整个山顶的轮廓。你从科堡老城那些色彩柔和的桁架房屋间走出来，一抬头，视线就被它完全霸占。脚下的路开始倾斜，空气变得清冽，周围是沙沙作响的山毛榉和冷杉林，松针和湿润泥土的气息混合着远处飘来的隐约咖啡香。攀登的过程本身就是一场朝圣，你的喘息声和踩在古老石阶上的脚步声，都在提醒你，这座要塞从来就不是为了舒适而建的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于穿过最后一道坡，站在巨大的双塔主门——“荣誉之门”前，触摸着那些被无数风雨和岁月打磨得冰冷而粗糙的砂岩块时，会瞬间明白它为什么被称为“弗兰肯的王冠”。它不是装饰，是权力的实体化。但有趣的是，如今环绕它的不是士兵，而是推着婴儿车的本地家庭、慢跑的老人和拿着素描本的学生。周末的下午，城堡脚下的草坪上总会有人躺着晒太阳，这座曾经的军事堡垒，早已融入了科堡人日常生活的背景，像一个沉默而可靠的祖父，守护着山下的万家灯火。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进内庭，那股混杂着历史尘埃、老木头和一丝淡淡霉味的独特气息扑面而来。空间豁然开朗，你会发现自己被不同时代的建筑立面所包围：一侧是庄严的文艺复兴宫殿，巨大的窗户仿佛洞察一切的眼睛；另一侧是厚重的中世纪城墙，留着火炮轰击的模糊痕迹。风声在这里变得不同，它在塔楼间呼啸，在拱廊下回旋，仿佛在低语着几个世纪以来的秘密。最打动人的是那种强烈的“层次感”，你不仅能看到建筑风格的叠加，更能感受到权力、信仰、艺术与家族命运在这里层层沉淀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它的核心魅力，或许就在于这种“反差”。它既是坚不可摧的武力象征，又曾是欧洲思想最动荡时期一位修道士的宁静书斋；它既是冷冰冰的石头堡垒，内部却收藏着丢勒、克拉纳赫笔下极致精美与人性化的艺术。这种钢铁与丝绸、战争与人文的并存，让科堡要塞不再仅仅是一个景点，而是一部你可以走进去的、立体的欧洲史书。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科堡要塞（弗兰肯的王冠）`} />
                <InfoRow label="英文名称" value={`Veste Coburg`} />
                <InfoRow label="正式名称" value={`Veste Coburg (The Crown of Franconia)`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`科堡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`萨克森-科堡-哥达王朝的祖宅与权力中心，也是欧洲宗教改革的关键庇护所，被誉为“弗兰肯的皇冠”。`} />
                <InfoRow label="建筑特色" value={`一座由多重环形防御体系、高耸塔楼和庞大宫殿群组成的复合体，完美体现了从中世纪要塞到文艺复兴宫殿的演变。`} />
                <InfoRow label="建筑风格" value={`以中世纪晚期和文艺复兴风格为主，融合了后期哥特式、文艺复兴及19世纪历史主义风格的修复与增建。`} />
                <InfoRow label="文化价值" value={`其博物馆收藏有世界级的艺术珍品、盔甲武器和历史文献，是研究德国诸侯国历史、宗教改革与宫廷文化的重要宝库。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡庭院、部分外景及花园全年全天开放。博物馆及室内区域开放时间：4月至10月，每日上午9:30至下午5:00；11月至3月，周二至周日下午1:00至下午4:00，周一闭馆。每年12月24日、12月31日及部分法定假日闭馆。请注意，最后入场时间为闭馆前30分钟。冬季如遇大雪，通往山顶的部分道路可能清理不及时，建议行前查询官网。`} />
              <InfoRow label="门票价格" value={`“博物馆通票”成人票8.5欧元，优惠票（学生、残障人士等）7欧元。家庭票（2位成人+儿童）19欧元。仅参观城堡庭院和外围免费。德语导游讲解团（约60分钟）需额外支付3欧元/人，建议提前在官网预订。持有“巴伐利亚宫殿年票”可免费进入博物馆区域。`} />
              <InfoRow label="地址" value={`Veste Coburg, 1, 96450 Coburg, Germany`} />
              <InfoRow label="交通方式" value={`最近的国际机场是纽伦堡机场（NUE），约80公里。从纽伦堡主火车站（Nürnberg Hbf）乘坐区域火车（RE或RB）前往科堡主火车站（Coburg Hbf），车程约1小时15分钟，班次频繁（约每小时1-2班）。从科堡火车站出发，步行上山是最经典的体验：出站后沿“Veste”路标，穿过老城，开始爬坡，全程约需30-45分钟（考验体力）。也可以乘坐公交车至“Veste”巴士站（线路3、5），但班次较少。最省力的是从集市广场（Markt）搭乘上山的出租车，约5分钟车程。自驾可将车停在山腰的指定停车场，然后步行5分钟到达主门。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起科堡要塞的“人生”，那可真是一部跌宕起伏的家族史诗。它的故事大概始于11世纪左右，最初可能只是简陋的木制哨塔，守护着重要的贸易路线。但真正让它登上历史舞台的，是那些精于算计、野心勃勃的萨克森公爵们。到了13世纪，它已经成了一座像样的石砌堡垒。想象一下，在那个封臣林立、战乱频发的年代，拥有这样一座居高临下、易守难攻的山顶要塞，就等于握住了整个地区的咽喉。它就像棋盘上最关键的那颗棋子，被各方势力反复争夺、加固、扩建。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`命运的转折点发生在16世纪，一个叫约翰·腓特烈一世的选帝侯，把这座家族城堡推向了巅峰。他不满足于要塞只是军事堡垒，他要把它打造成配得上自己权力和品味的宫殿。于是，大批文艺复兴风格的建筑师和艺术家被请上山，中庭里建起了优雅的拱廊，房间里装上了华丽的凸窗，冰冷的石头内部开始填充壁画、挂毯和家具。科堡要塞完成了从“武夫”到“贵族”的华丽转身。但比起建筑，约翰·腓特烈做了一件影响更深远的事——他在关键时刻，选择庇护了一个正被整个帝国通缉的“逃犯”：马丁·路德。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1521年，沃尔姆斯会议后，路德成了帝国的敌人，生命危在旦夕。选帝侯秘密将他转移到科堡要塞，在这里，路德度过了近一年的时光。你能想象吗？在这座象征着旧秩序和武力的城堡里，路德躲在“路德小室”中，透过窗户望着山下弗兰肯的土地，用笔作为武器，继续翻译《圣经》，撰写文章，掀起了一场颠覆整个欧洲的精神风暴。要塞的厚重墙壁，意外地成了新思想萌芽的温室。这段往事，给这座坚硬的城堡注入了一丝柔软的、思想的光芒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到19世纪，科堡家族通过精明的联姻，将血脉洒向了欧洲各个王室，最著名的便是英国维多利亚女王的丈夫阿尔伯特亲王。这座城堡成为了萨克森-科堡-哥达王朝的“祖屋”和精神象征。家族成员从欧洲各地归来，带回财富、艺术品和新的审美，城堡内部再次被装修，增添了许多浪漫主义的历史主义风格元素，试图重温中世纪的光荣。它成了一个活着的家族博物馆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，20世纪的战火也没有放过它。二战末期，科堡作为重要的交通枢纽遭到了猛烈轰炸，老城损毁严重。但奇迹般的是，山顶的要塞虽然挨了几发炮弹，主体结构却顽强地屹立不倒。战后，它被小心翼翼地修复，不再是王侯的私产，而是变成了属于所有人的公共博物馆。那些曾经见证过权力更迭、庇护过思想先驱、经历过枪林弹雨的房间，如今静静地陈列着丢勒的版画、老克拉纳赫的油画、精美的盔甲和古老的玩具。它的故事，从家族的传奇，最终变成了全人类共享的记忆。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味科堡要塞，请务必预留一整天时间。建议早上9点左右从山脚下老城出发，慢慢徒步上山，这样既能避开午后可能的旅行团人潮，也能在晨光中感受城堡苏醒的宁静。整体游览节奏应是“外-内-外”：先用上午的2-3小时沉浸式探索博物馆内部宝藏，中午在城堡餐厅的露台享用一顿伴着无敌 view 的午餐，下午则悠闲地漫步外围防御工事、小径和花园，从各个角度欣赏这座建筑巨兽的雄姿。这样的安排让你既能深入其文化艺术核心，又不错过它作为山地要塞的宏观震撼，最后在黄昏时分，带着一身历史的气息和满眼的风景满足地下山。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿着绝对要舒适，尤其是鞋子，全天都需要大量的步行和爬楼梯。博物馆内部许多房间为保护藏品，温度较低，即使是夏季也建议带一件薄外套。城堡餐厅价格略高且旺季需等位，可以自带简餐在内庭或花园野餐，这是很多本地人的做法。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城集市广场开始你的徒步攀登，让身体先适应倾斜的石板路，并在沿途的观景台回望逐渐变小的城市全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用力推开那扇厚重的“荣誉之门”，走进豁然开朗的内庭广场，立刻被四周不同时代的建筑立面与高耸的双塔所包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直接钻进“艺术收藏馆”，在光线柔和的展厅里寻找丢勒那幅著名的《菲力特·普莱辛像》，感受文艺复兴大师笔下穿透时光的凝视。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转到“武器馆”，让自己淹没在数百套闪闪发光的骑士盔甲、长剑和火枪的森林中，想象它们曾经碰撞发出的巨响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那条通往“路德小室”的安静走廊，走进那间陈设简朴的房间，坐在复制书桌前，尝试捕捉五百年前那位改革者在此沉思的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上“钟楼”狭窄的旋转阶梯，抵达顶部平台，让360度的弗兰肯乡村全景像画卷一样在你眼前猛然铺开，风会大得让你站不稳。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡西侧的“露台”缓缓下山，穿过古老的城防工事和幽静的森林小径，从另一个角度仰望城墙的雄伟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后在城堡山脚下的“花园”长椅上坐下，喝一口自带的水，静静地、完整地，从下往上打量这座你刚刚征服的“王冠”。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`荣誉之门仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光西斜时，站在内庭广场中心，用广角镜头仰拍双塔与拱形门洞，能拍出极具纵深感和力量感的对称构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`西侧防御墙全景位`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，从城堡西侧下方的小径（通往玫瑰园的路上）回头拍摄，暖金色的光线会照亮整个西立面，将其与深绿的森林背景完美分离。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`路德小室的窗景`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线最佳，聚焦于那扇小小的、装有菱形玻璃的窗户，将窗框作为画框，拍摄窗外那片郁郁葱葱的、路德曾凝视过的弗兰肯森林。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`骑士厅盔甲细节`}</h4>
                  <p className="text-sm text-gray-700">{`利用博物馆内的人工光源，将相机镜头贴近玻璃展柜，以大光圈特写某具盔甲上精美的蚀刻花纹或面甲的眼缝，营造穿越时空的质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`远眺要塞经典角度`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或雨后的清新时刻，从科堡老城“圣莫里茨教堂”附近的街道向上拍摄，让教堂尖顶作为前景，云雾缭绕的山顶要塞作为背景，层次感绝佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`博物馆室内严格禁止使用闪光灯和三脚架（除非有特殊许可）。航拍无人机在城堡上空飞行需要特殊申请，通常不被允许，因为属于受保护的古迹和空域。拍摄当地人请务必先微笑示意并征得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在山脚下经过翻新的百年桁架木屋里，房东太太会为你准备丰盛的弗兰肯式早餐，晚上听着远处教堂钟声入睡，仿佛住在童话旁。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色历史酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择由古老贵族府邸改造的精品酒店，房间挑高极高，装饰着复古家具和当地艺术画作，位置极佳，推开窗就能看到夜幕下被灯光点亮的要塞。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代舒适设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于中央火车站附近，设计简约明亮，交通便利，对于自驾或拖着大行李箱的旅客非常友好，是探索一天后回归舒适的完美基地。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`静谧乡间旅舍`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求绝对宁静，可以住在科堡近郊被田野环绕的农庄旅舍，每天清晨在鸟鸣和新鲜牛奶的香气中醒来，开车10分钟就能抵达城堡山脚。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`科堡是一个非常安全、宁静的小城，住宿区域选择很自由。旺季（夏季和圣诞市场期间）建议至少提前一个月预订，尤其是老城内的特色住宿。如果自驾，预订时务必确认酒店是否提供停车位，老城内的停车位通常紧张且收费较高。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科堡要塞下山时，我的脚步是缓慢的，小腿酸胀，但心里却装得满满的。回头望去，暮色中的城堡剪影依然威严，但那份最初的压迫感，已经化为了某种亲切的厚重。这一天的旅程，像一次时间的深潜。你触摸过冷兵器时代的钢铁铠甲，也凝视过文艺复兴画作中人性觉醒的柔光；你站在战略家谋划全局的塔楼，也坐在思想家字斟句酌的书房。这座城堡教会我，历史从来不是单线条的叙事，它是无数种力量——武力、权力、财力、信仰力、创造力——相互碰撞、纠缠、叠加在一起的复杂层积岩。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求即时、快速、碎片化的世界里，科堡要塞的存在本身就是一种温柔的抵抗。它要求你付出体力去攀登，付出时间去阅读，付出耐心去理解一层石头覆盖另一层石头的故事。它不提供一目了然的“网红感”，它的 reward 是迟来的、深沉的。当你最终把所有这些碎片——战争的、艺术的、宗教的、家族的——在脑海里拼凑完整时，你所获得的，是对一段波澜壮阔的欧洲史极其真切而立体的触摸感。这，正是深度旅行的精髓所在。所以，如果你厌倦了浮光掠影，渴望一场能与历史真实对话的旅行，那么请来科堡，亲手触碰这顶“弗兰肯的王冠”，它会给你远超一座城堡的丰厚回馈。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kalmar-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔马城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kalmar Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nordlingen-ries-crater-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    讷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">讷德林根（陨石坑小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nördlingen</p>
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
