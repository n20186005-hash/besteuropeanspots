import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦沃城堡 Castle of Vêves｜探访阿登高地深处现实版哈利波特魔法城堡 - 最佳欧洲景点',
  description: '第一眼看到韦沃城堡时，你会以为自己不小心闯进了某本童话书的扉页插图，或者是哈利·波特电影里某个未被标注的取景地。它就这么突然地、完整地出现在阿登高地茂密的林间空地上，周围是沙沙作响的橡树和山毛榉，空气里混合着潮湿的苔藓、松针和远处草场飘来的淡淡青草香。那五座指向天空的深灰色尖塔，像极了巨人遗落的巫师...',
}

export default function VevesCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '韦沃城堡', href: '/attractions/veves-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`韦沃城堡・Castle of Vêves・比利时・塞勒（Celles，位于那慕尔省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到韦沃城堡时，你会以为自己不小心闯进了某本童话书的扉页插图，或者是哈利·波特电影里某个未被标注的取景地。它就这么突然地、完整地出现在阿登高地茂密的林间空地上，周围是沙沙作响的橡树和山毛榉，空气里混合着潮湿的苔藓、松针和远处草场飘来的淡淡青草香。那五座指向天空的深灰色尖塔，像极了巨人遗落的巫师帽，倒映在环绕城堡的宁静水面上，水波不惊，只有几只绿头鸭悄无声息地划过，留下一圈圈扩散的涟漪。时间在这里仿佛被施了魔法，缓慢得几乎停滞，只剩下风穿过塔楼箭孔时发出的、近乎叹息的呜咽声。
穿过那座小小的石桥进入城堡内部，中世纪的氛围瞬间将你包裹。光线从狭窄的彩绘玻璃窗斜射进来，在厚重的橡木地板上投下斑驳陆离的光影。空气中漂浮着一种独特的混合气味：陈年木料的微甜、石墙沁出的凉意、还有老式打蜡家具散发的淡淡芬芳。螺旋上升的石阶被无数双脚磨得中心凹陷、光亮如镜，扶手却粗糙而坚实。你会不自觉地放轻脚步，生怕惊扰了沉睡在挂毯后面的古老幽灵。这里不像那些被过度修复、挤满游客的宫殿，它带着一种“仍在使用中”的生活感——壁炉里似乎刚刚熄火，书房里的古籍好像才被人翻阅过。
对于当地人来说，韦沃城堡不仅仅是明信片上的风景。它是塞勒村乃至整个瓦隆尼亚地区的骄傲。你会看到年轻的父母带着孩子，指着护城河里的鸭子讲解自然课；也会看到头发花白的老夫妇，手挽着手在城堡花园里散步，轻声讲述他们年轻时在这里参加舞会的往事。城堡至今仍是博福特家族的后裔所拥有，它不仅是博物馆，更是一个仍然“活着”的家。在夏季，它的庭院里会举办古典音乐会，圣诞节前则有温馨的市集，南瓜和藤蔓装饰着古老的城墙，让历史充满了烟火气。
它的核心魅力，在于这种惊人的完整性与真实性。它不是一座冷冰冰的石头博物馆，而是一个层层叠叠、充满故事的时间胶囊。从厚重的橡木大门，到悬挂着祖先肖像的骑士大厅，再到藏着秘密通道的塔楼房间，每一处细节都在低声诉说着七个世纪以来的欢笑、阴谋、爱情与坚守。来到这里，你不是在参观一个景点，而是在体验一种逃离——逃离现代的喧嚣，踏入一个由石头、森林和传说构筑的、更为缓慢而深邃的梦境。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到韦沃城堡时，你会以为自己不小心闯进了某本童话书的扉页插图，或者是哈利·波特电影里某个未被标注的取景地。它就这么突然地、完整地出现在阿登高地茂密的林间空地上，周围是沙沙作响的橡树和山毛榉，空气里混合着潮湿的苔藓、松针和远处草场飘来的淡淡青草香。那五座指向天空的深灰色尖塔，像极了巨人遗落的巫师帽，倒映在环绕城堡的宁静水面上，水波不惊，只有几只绿头鸭悄无声息地划过，留下一圈圈扩散的涟漪。时间在这里仿佛被施了魔法，缓慢得几乎停滞，只剩下风穿过塔楼箭孔时发出的、近乎叹息的呜咽声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过那座小小的石桥进入城堡内部，中世纪的氛围瞬间将你包裹。光线从狭窄的彩绘玻璃窗斜射进来，在厚重的橡木地板上投下斑驳陆离的光影。空气中漂浮着一种独特的混合气味：陈年木料的微甜、石墙沁出的凉意、还有老式打蜡家具散发的淡淡芬芳。螺旋上升的石阶被无数双脚磨得中心凹陷、光亮如镜，扶手却粗糙而坚实。你会不自觉地放轻脚步，生怕惊扰了沉睡在挂毯后面的古老幽灵。这里不像那些被过度修复、挤满游客的宫殿，它带着一种“仍在使用中”的生活感——壁炉里似乎刚刚熄火，书房里的古籍好像才被人翻阅过。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于当地人来说，韦沃城堡不仅仅是明信片上的风景。它是塞勒村乃至整个瓦隆尼亚地区的骄傲。你会看到年轻的父母带着孩子，指着护城河里的鸭子讲解自然课；也会看到头发花白的老夫妇，手挽着手在城堡花园里散步，轻声讲述他们年轻时在这里参加舞会的往事。城堡至今仍是博福特家族的后裔所拥有，它不仅是博物馆，更是一个仍然“活着”的家。在夏季，它的庭院里会举办古典音乐会，圣诞节前则有温馨的市集，南瓜和藤蔓装饰着古老的城墙，让历史充满了烟火气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，在于这种惊人的完整性与真实性。它不是一座冷冰冰的石头博物馆，而是一个层层叠叠、充满故事的时间胶囊。从厚重的橡木大门，到悬挂着祖先肖像的骑士大厅，再到藏着秘密通道的塔楼房间，每一处细节都在低声诉说着七个世纪以来的欢笑、阴谋、爱情与坚守。来到这里，你不是在参观一个景点，而是在体验一种逃离——逃离现代的喧嚣，踏入一个由石头、森林和传说构筑的、更为缓慢而深邃的梦境。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`韦沃城堡`} />
                <InfoRow label="英文名称" value={`Castle of Vêves`} />
                <InfoRow label="正式名称" value={`Château de Vêves`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`塞勒（Celles，位于那慕尔省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`比利时瓦隆地区保存最完好的中世纪军事及贵族居住建筑瑰宝之一，是博福特（Beaufort）家族长达七个世纪传奇历史的鲜活见证。`} />
                <InfoRow label="建筑特色" value={`宛如童话故事插图的五个锥形尖顶塔楼，被一道古老的护城河温柔环绕，构成了极其匀称且富有戏剧性的外观轮廓。`} />
                <InfoRow label="建筑风格" value={`以哥特式复兴风格为主导，并融合了早期哥特式军事建筑元素的典型中世纪城堡。`} />
                <InfoRow label="文化价值" value={`不仅是一座建筑丰碑，更是理解比利时南部法语区（瓦隆尼亚）乡村贵族生活、封建制度与浪漫主义建筑思潮相互交融的绝佳窗口。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡通常于每年4月至11月初的周二至周日开放，具体时间为上午10点至下午6点（最后入场时间为下午5点）。7月和8月会延长开放时间并可能每日开放。冬季（11月至次年3月）主要对预约团队开放，个人游客需提前在官网确认或电话预约。请注意，开放时间可能因私人活动或维护而临时调整，出行前务必查看官网公告。`} />
              <InfoRow label="门票价格" value={`成人票价为10欧元，65岁以上长者及学生票价为8欧元，6至12岁儿童票价为5欧元，6岁以下儿童免费。家庭套票（2成人+2儿童）为28欧元。提供法语、荷兰语、英语和德语的导览服务，导览费用已包含在门票内，但需在指定时间加入导览团。城堡花园可免费参观。`} />
              <InfoRow label="地址" value={`Château de Vêves, Rue de Furfooz 1, 5561 Celles, Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔出发：最便捷的方式是自驾，沿E411高速公路向南行驶，在“那慕尔南（Namur-Sud）”出口下，再根据路标前往“Celles”方向，全程约1小时30分钟。若使用公共交通，先从布鲁塞尔中央火车站乘坐火车至那慕尔站（Namur，约1小时车程，班次频繁），然后在站前广场乘坐72路公交车前往“Celles”村（约50分钟，班次稀疏，每天约4-5班，务必提前查好时刻表）。从村中心步行至城堡约需20分钟，沿途是宁静的乡间小路。强烈建议提前租车或预约出租车（可从那慕尔火车站预约），这是探索阿登高地乡村最自由的方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`韦沃城堡的故事，始于一片充满传奇色彩的土地。早在公元7世纪，圣徒圣伊莱尔（Saint Hadelin）就在附近的默兹河畔建立了修道院，这片区域开始成为精神与世俗权力的交汇点。不过，城堡的书面历史通常追溯到11世纪。当时，这片土地的第一座防御工事——很可能是一个简陋的木制堡垒——由虔诚者戈德弗里德（Godfrey the Pious）建造，他是下洛林公爵，也是第一次十字军东征领袖戈弗雷·德·布永（Godfrey of Bouillon）的亲戚。最初的城堡肩负着守护通往迪南（Dinant）和那慕尔（Namur）重要贸易路线的战略职责，矗立在岩石山嘴上，俯瞰着山谷。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的命运与博福特家族紧密相连，这个家族的名字首次出现在12世纪的文献中。他们的纹章——三只奔跑的野猪——至今仍装饰在城堡的墙壁上。中世纪是动荡的时期，城堡在13世纪经历了一场毁灭性的大火，几乎化为废墟。但家族的韧性在此时显现，他们在原址上重建了更坚固的石制堡垒。真正让城堡面貌焕然一新的，是15世纪的吉尔·德·博福特（Gilles de Beaufort）。他是一位有权势的领主，也是那慕尔伯爵的顾问。在他的主持下，城堡从一座纯粹的军事要塞，逐渐转变为一座兼顾防御与居住舒适性的贵族宅邸。那些我们今天看到的标志性锥形塔楼，其基础就是在那个时代奠定的，它们的设计既考虑了瞭望防御，也增添了建筑的优雅美感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，平静总是短暂的。16世纪和17世纪，低地国家陷入宗教战争和西班牙继承战争的泥潭。城堡因其战略位置多次被军队占领和洗劫。据说，城堡下方错综复杂的地道网络，曾不止一次帮助家族成员在围攻中秘密逃生。最严峻的考验出现在18世纪末的法国大革命时期。革命军的浪潮席卷而来，许多贵族城堡被没收、摧毁。韦沃城堡奇迹般地躲过了最坏的命运，部分原因是当时的家族主人表现出了灵活的政治智慧，也与当地农民对领主相对较好的口碑有关。但它仍然遭受了损失，部分内部装饰和档案被破坏或散佚。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入19世纪，浪漫主义思潮席卷欧洲，人们对中世纪哥特式风格重新燃起了热情。正是在这个时期，韦沃城堡在阿尔西德·德·博福特（Alcide de Beaufort）的手中，经历了最后一次也是决定性的改造。他聘请了著名的建筑师，并非简单地修复，而是以当时流行的“哥特式复兴”审美，对城堡进行了大规模改建和装饰。我们今天看到的充满童话色彩的尖顶、精致的窗花格、以及内部那些新哥特式的木雕、彩绘天花板和仿古挂毯，很大程度上都归功于这次19世纪的“浪漫化改造”。这次改造让城堡脱胎换骨，从一个略显粗犷的中世纪堡垒，变成了如今这座如梦似幻的浪漫主义建筑杰作。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`两次世界大战的硝烟也拂过了这座城堡。在第二次世界大战期间，它曾被德军短暂征用。幸运的是，它再次避免了严重的物理损坏。战后至今，城堡一直由博福特家族的后代精心维护和经营。他们做出了一个明智的决定：不将城堡卖给国家或大型财团，而是自己作为管理者，向公众有限度地开放。这种家族式的管理，赋予了韦沃城堡一种独一无二的灵魂。你能够感受到，这里的每一件家具、每一幅肖像，都不是冰冷的展品，而是一个家族绵延不断记忆的载体。正是这跨越七个世纪、从未间断的传承与守护，才让这座阿登高地的明珠，得以如此鲜活、如此完整地呈现在我们面前。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的韦沃城堡之旅，始于一个宁静的早晨。建议在上午10点开门前约15分钟抵达，这样你可以在几乎没有其他游客的干扰下，从城堡外围的护城河边开始你的探索。整体游览时间建议预留3到4个小时，其中包含1小时左右的室内导览（强烈推荐参加，因为讲解充满了家族传承的生动轶事），以及充裕的时间在花园和周边林地散步。这样的节奏安排，能让你先由外而内地感受城堡的童话般外观，再深入其充满故事的内核，最后在宁静的自然环境中消化所有的历史细节与感官印象，完成一次从视觉震撼到内心共鸣的完整体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在城堡官网确认开放时间和导览语言场次，这里的公共交通不便，白跑一趟会很扫兴。参加室内导览是必须的，否则你只能看到空房子而错过所有精彩的故事。城堡内部分楼梯非常陡峭且狭窄，请务必穿着舒适防滑的平底鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨时分，先从城堡正前方的护城河对岸开始，静静地欣赏五个尖塔倒映在水中的完美对称画面，听一听林间的鸟鸣和微风。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过古老的石桥进入城堡大门，在铺着鹅卵石的中央庭院里驻足，抬头环视被高耸塔楼围合的天空，感受被历史包裹的瞬间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览员走进昏暗而威严的骑士大厅，让眼睛慢慢适应烛台般灯光下那些巨大的家族肖像、闪亮的盔甲和跨越几个世纪的狩猎战利品。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着狭窄蜿蜒的螺旋石梯登上主塔楼，从狭小的箭窗探出头去，眼前豁然开朗，阿登高地连绵起伏的绿色森林和红色屋顶的村庄尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探索地下室的古老厨房和储藏间，想象一下中世纪仆人们在此忙碌的景象，空气中似乎还残留着熏肉和柴火的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步到城堡后方精心修剪的法式花园，坐在长椅上，看着蜜蜂在玫瑰丛中嗡嗡作响，从另一个柔和的角度回望城堡坚硬的石壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开主建筑后，别急着走，沿着护城河外围的小径散散步，从各个不同的角度捕捉城堡与自然融为一体的风景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后在城堡入口处的小纪念品商店稍作停留，这里出售的书籍和明信片往往有家族成员亲自撰写的介绍，是深入了解的绝佳补充。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河正南岸的草坪`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，阳光为城堡镶上金边时，利用平静的水面拍摄城堡和尖塔的完美倒影，构图力求对称。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡中央庭院仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，站在庭院中心抬头拍摄，可以捕捉到五座尖塔以蓝天为背景、向中心聚拢的震撼透视效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`骑士大厅的壁炉前`}</h4>
                  <p className="text-sm text-gray-700">{`利用室内柔和的自然光（避开直射阳光），以巨大的石砌壁炉和上方的家族纹章为前景，拍摄大厅纵深的空间感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`西侧花园的长椅视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，坐在花园西侧的长椅上，以盛开的玫瑰花丛为前景框架，拍摄城堡侧面的全景，画面会充满生机与浪漫。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从远处林间小路回望`}</h4>
                  <p className="text-sm text-gray-700">{`游览结束后，沿着离开城堡的乡村小路走远一些，在树木的缝隙中回望，捕捉城堡仿佛隐藏在林海中的神秘一瞥。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内大部分区域允许拍照，但禁止使用闪光灯和三脚架，以保护古老的织物和画作。使用大光圈镜头或提高感光度，可以更好地捕捉室内昏暗光线下的氛围。航拍在此区域通常被严格禁止，请务必遵守规定。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`城堡附近的田园民宿`}</h4>
                  <p className="text-sm text-blue-800">{`在塞勒村或隔壁的豪伊（Houyet）镇，有几家由古老农舍改造的民宿，主人会为你准备用本地食材制作的丰盛早餐，夜晚安静得只能听到猫头鹰的叫声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`那慕尔市中心的精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`如果希望有更多餐饮选择，可以住在那慕尔，这座迷人的河边城市有很多设计感十足的精品酒店，从那里自驾来城堡也很方便，还能体验城市的夜生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`阿登森林中的隐居木屋`}</h4>
                  <p className="text-sm text-yellow-800">{`在城堡周边的森林里散落着一些自炊式小木屋，适合想要深度融入自然的旅行者，晚上可以生起壁炉，完全沉浸在中世纪般的宁静之中。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`迪南河畔的历史酒店`}</h4>
                  <p className="text-sm text-purple-800">{`距离城堡约20分钟车程的迪南（Dinant）小镇坐落在默兹河畔，有几家能看到著名城堡岩和萨克斯风雕塑的酒店，结合了山水美景与便利设施。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿登高地乡村地区的住宿普遍宁静但选择有限，尤其在夏季和周末，务必提前数周甚至数月预订。大多数优质民宿和酒店不位于公共交通线上，自驾是几乎必需的条件。周边餐厅也较少，许多住宿提供半膳服务（含晚餐），这是体验本地家常菜的好机会。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开韦沃城堡很久之后，那五座尖塔的轮廓依然会清晰地浮现在脑海里。它带给我的，远不止是一组漂亮的建筑照片或一段中世纪历史知识。它更像是一个关于“延续”的温柔启示。在这个时代，很多东西都变得快速、易碎、可替代，但在这里，石头、家族、记忆和土地，以一种固执而优雅的方式紧密相连，走过了瘟疫、战火和革命，整整七个世纪。站在那座小小的石桥上，你会感到自己不仅仅是时空的访客，更是在一瞬间，触碰到了时间本身那种厚重、绵长的质感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是为什么每一个厌倦了浮光掠影式打卡的旅人，都应该来一次韦沃城堡。它藏匿在比利时不那么起眼的东南角落，没有布鲁塞尔大广场的喧嚣，也没有布鲁日运河的稠密人流。但正是这份“隐藏”的属性，保全了它的魔力与纯粹。在这里，你得以真正地慢下来，倾听石头的声音，感受一个家族脉搏的跳动，并在阿登高地带着青草味的微风里，重新确认那些古老的价值——守护、传承、与自然共处。它或许不是欧洲最大、最豪华的城堡，但它很可能是最能让你的心安静下来，并带给你长久回味的那一个。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/monsaraz-castle-village-alqueva" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙萨拉什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monsaraz</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stolzenfels-castle-koblenz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施托尔岑费尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stolzenfels Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/eger-castle-bulls-blood-wine-region" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃格尔城堡与公牛血产区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eger Castle and Bull's Blood Region</p>
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
