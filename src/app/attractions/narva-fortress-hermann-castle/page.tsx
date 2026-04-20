import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '纳尔瓦要塞 Hermann Castle｜在边境河岸与骑士堡隔河对望的欧洲活历史 - 最佳欧洲景点',
  description: '当我第一次站在纳尔瓦河（Narva jõgi）的西岸，凛冽的河风裹挟着湿润的水汽扑面而来，眼前的一幕瞬间让我屏住了呼吸。河的这边，是灰白色砂岩筑成的纳尔瓦要塞，坚实、冷峻，像一位沉默的北欧骑士；仅仅一百五十米宽的河对岸，赭石色城墙的伊万哥罗德要塞（Ivangorod Fortress）如同它的俄罗斯...',
}

export default function NarvaFortressHermannCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '纳尔瓦要塞', href: '/attractions/narva-fortress-hermann-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`纳尔瓦要塞・Narva Fortress・爱沙尼亚・纳尔瓦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一次站在纳尔瓦河（Narva jõgi）的西岸，凛冽的河风裹挟着湿润的水汽扑面而来，眼前的一幕瞬间让我屏住了呼吸。河的这边，是灰白色砂岩筑成的纳尔瓦要塞，坚实、冷峻，像一位沉默的北欧骑士；仅仅一百五十米宽的河对岸，赭石色城墙的伊万哥罗德要塞（Ivangorod Fortress）如同它的俄罗斯镜像，同样巍峨，同样带着历史的凝视。两座堡垒隔河相望，如此之近，近到仿佛能听见对方城墙上旗帜猎猎作响——这大概是我在欧洲见过的最具戏剧张力、最直白的地理课开场。
走近纳尔瓦要塞，脚下是鹅卵石铺就的斜坡，空气里混合着河水微腥的气息、古老石墙散发出的淡淡潮味，还有从城墙缝隙里钻出来的野草的清苦香气。城堡的主体是敦实的矩形，角落那座高耸的“长赫尔曼”塔楼是绝对的主角。我仰起头，看塔尖刺入波罗的海沿岸常见的铅灰色云层，一群寒鸦绕着塔身盘旋，发出粗粝的叫声，这声音在空旷的河岸上被放大，更添了几分苍凉。这里不是那种被精心呵护、仅供观赏的博物馆城堡；你能感觉到它的“实用主义”基因，每一块凹凸不平的石头都诉说着防御、瞭望和生存。
有趣的是，这座曾经杀气腾腾的堡垒，如今已经温柔地融入了纳尔瓦人的日常。我看到本地老人沿着河岸步道慢跑，情侣倚靠在面对俄罗斯的观景栏杆上低语，孩子们在城墙下的草地上追逐。城堡的庭院里，夏天会搭起临时舞台，举办中世纪市集或音乐会，空气里会飘荡起烤肉和蜂蜜酒的香味，以及欢快的民族乐声。那一刻你会明白，历史最好的归宿，不是被供奉，而是被生活重新拥抱。它最打动人的核心魅力，正是这种巨大的反差与和解：一边是冰冷坚硬的、象征着分裂与对抗的边境线，另一边却是活生生的、在历史伤痕上努力开出花朵的当下生活。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我第一次站在纳尔瓦河（Narva jõgi）的西岸，凛冽的河风裹挟着湿润的水汽扑面而来，眼前的一幕瞬间让我屏住了呼吸。河的这边，是灰白色砂岩筑成的纳尔瓦要塞，坚实、冷峻，像一位沉默的北欧骑士；仅仅一百五十米宽的河对岸，赭石色城墙的伊万哥罗德要塞（Ivangorod Fortress）如同它的俄罗斯镜像，同样巍峨，同样带着历史的凝视。两座堡垒隔河相望，如此之近，近到仿佛能听见对方城墙上旗帜猎猎作响——这大概是我在欧洲见过的最具戏剧张力、最直白的地理课开场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近纳尔瓦要塞，脚下是鹅卵石铺就的斜坡，空气里混合着河水微腥的气息、古老石墙散发出的淡淡潮味，还有从城墙缝隙里钻出来的野草的清苦香气。城堡的主体是敦实的矩形，角落那座高耸的“长赫尔曼”塔楼是绝对的主角。我仰起头，看塔尖刺入波罗的海沿岸常见的铅灰色云层，一群寒鸦绕着塔身盘旋，发出粗粝的叫声，这声音在空旷的河岸上被放大，更添了几分苍凉。这里不是那种被精心呵护、仅供观赏的博物馆城堡；你能感觉到它的“实用主义”基因，每一块凹凸不平的石头都诉说着防御、瞭望和生存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`有趣的是，这座曾经杀气腾腾的堡垒，如今已经温柔地融入了纳尔瓦人的日常。我看到本地老人沿着河岸步道慢跑，情侣倚靠在面对俄罗斯的观景栏杆上低语，孩子们在城墙下的草地上追逐。城堡的庭院里，夏天会搭起临时舞台，举办中世纪市集或音乐会，空气里会飘荡起烤肉和蜂蜜酒的香味，以及欢快的民族乐声。那一刻你会明白，历史最好的归宿，不是被供奉，而是被生活重新拥抱。它最打动人的核心魅力，正是这种巨大的反差与和解：一边是冰冷坚硬的、象征着分裂与对抗的边境线，另一边却是活生生的、在历史伤痕上努力开出花朵的当下生活。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`纳尔瓦要塞`} />
                <InfoRow label="英文名称" value={`Narva Fortress`} />
                <InfoRow label="正式名称" value={`Hermann Castle (Hermanni linnus)`} />
                <InfoRow label="国家" value={`爱沙尼亚`} />
                <InfoRow label="城市" value={`纳尔瓦`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是爱沙尼亚乃至波罗的海地区最强大、最具战略意义的中世纪边境要塞之一，见证了北欧与东欧数百年来的权力博弈。`} />
                <InfoRow label="建筑特色" value={`一座雄伟的丹麦-条顿风格骑士城堡，其标志性的高达51米的“长赫尔曼”塔楼（Pikk Hermann）巍然耸立，与河对岸俄罗斯的伊万哥罗德要塞形成世纪对峙的奇观。`} />
                <InfoRow label="建筑风格" value={`以哥特式军事建筑为核心，后期融入了文艺复兴和巴洛克风格的防御工事元素。`} />
                <InfoRow label="文化价值" value={`它不仅是一座军事堡垒，更是爱沙尼亚民族坚韧精神的象征，是理解波罗的海复杂地缘历史的活态教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡庭院及外堡区域全年每日开放，可自由进入。城堡主楼（博物馆）开放时间：5月至9月 10:00-18:00；10月至次年4月 10:00-17:00，周一闭馆。请注意，塔楼开放时间可能因天气和安全原因缩短，冬季偶有关闭维护。节假日（如圣诞节、元旦）开放时间会有调整，建议行前查阅官网。`} />
              <InfoRow label="门票价格" value={`进入城堡庭院免费。城堡主楼（博物馆）成人票8欧元；学生、长者票6欧元。家庭套票（2大2小）16欧元。持塔林卡（Tallinn Card）免费。登临长赫尔曼塔（Pikk Hermann）需额外支付3欧元。门票可在游客中心或博物馆入口处购买，支持信用卡支付。`} />
              <InfoRow label="地址" value={`Peterburi maantee 2, 20308 Narva, Estonia`} />
              <InfoRow label="交通方式" value={`从塔林国际机场（TLL）出发，最便捷的方式是乘坐长途巴士。在塔林中央汽车站（Autobussijaam）乘坐前往纳尔瓦的巴士，班次频繁，约每小时一班，车程约3小时至3.5小时。抵达纳尔瓦汽车站后，步行约15-20分钟即可抵达要塞，沿途会穿过纳尔瓦老城区。也可以从塔林乘坐火车前往，但班次较少，日间约2-3班，车程约3小时，纳尔瓦火车站距离要塞步行约25分钟。自驾则沿E20公路向东行驶约210公里，要塞附近有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`纳尔瓦的故事，始于一条河流的诱惑。纳尔瓦河是连接波罗的海和俄罗斯腹地的重要水道，在中世纪，这就意味着财富与危险并存。13世纪末，丹麦人在此建立了第一座木制城堡，但真正赋予它钢铁骨骼的，是接管的条顿骑士团。这些身穿白袍绣着黑十字的骑士，在14世纪初将城堡彻底改建为石砌要塞，并命名为“赫尔曼城堡”，以纪念他们的传奇团长。那座高塔，便是“长赫尔曼”，它不仅是军事瞭望塔，更是骑士团在这片北方边疆的权力宣言。城堡脚下，一个繁荣的商贾城镇逐渐成长，汉萨同盟的船只在这里装卸来自俄罗斯的皮毛、蜡和来自西方的布匹、白银，纳尔瓦成了东西方贸易的十字路口。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，十字路口也意味着四战之地。接下来的几个世纪，纳尔瓦要塞成了瑞典王国与沙皇俄国反复争夺的焦点，它的城墙在一次又一次的围攻中加厚、加高。最惨烈的一役发生在1700年大北方战争初期，年轻气盛的瑞典国王查理十二世，就在这里以少胜多，击败了人数占优的沙皇彼得一世的大军。你可以想象，当年河两岸必然是炮火连天，硝烟笼罩着两座隔河相望的堡垒，它们既是盾牌，也是长矛。瑞典人统治时期，要塞被进一步现代化，增加了棱堡等防御体系，形成了我们今天看到的宏大格局。但命运的车轮无情转动，最终，在1704年，经过漫长而血腥的围攻，彼得大帝的军队终于攻克了纳尔瓦，爱沙尼亚并入了俄罗斯帝国。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`要塞的军事功能在帝国时代逐渐褪色，但它找到了新的角色——监狱和兵营。厚重的石墙关押过形形色色的囚犯，回荡过不同口音的士兵的脚步声。然而，它最大的劫难来自20世纪。二战末期，纳尔瓦成为了东线战场可怕的绞肉机。在1944年激烈的纳尔瓦战役中，苏德双方在此反复拉锯，整座纳尔瓦城几乎被夷为平地，这座中世纪要塞也遭受了毁灭性的轰炸，内部建筑严重损毁，只留下了伤痕累累的外壳和依然倔强挺立的塔楼。战后，纳尔瓦划归苏联爱沙尼亚共和国，而河对岸的伊万哥罗德则属于苏联俄罗斯联邦，一道真实的铁幕在此落下。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`冷战结束后，爱沙尼亚重获独立，纳尔瓦要塞迎来了新生。一项漫长而精细的修复工程展开了，爱沙尼亚人小心翼翼地清理废墟，加固墙体，并基于历史文献重建了部分内部结构。它不再是边境线上的军事前哨，而是变身成为一座讲述自己多舛身世的博物馆。今天，当你漫步在修缮一新的骑士大厅，或登上“长赫尔曼”塔顶，你脚下的每一块砖石，都叠加着丹麦人、条顿骑士、瑞典人、俄国人、苏联人，以及最终的爱沙尼亚人的层叠印记。它就像一位经历了所有风暴的古老智者，静静地坐在河边，看着河水奔流，看着边境线从开放到封闭，再到重新开放，沉默地见证着历史的潮起潮落。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受纳尔瓦要塞的时空层次，我强烈建议安排一整天的时间。最佳抵达时间是上午9点-10点，这时旅行团尚未大批到来，光线也适合从西侧拍摄城堡全景。整个游览节奏应是“由外及内，由下至上，再由历史回归现实”。上午先在外围感受它的地理震撼和防御体系，下午深入城堡内部探索博物馆和登塔，傍晚则留给河岸，体验边境日落的独特氛围。这样的安排能让你层层剥开它的故事，不会感到匆忙，也能捕捉到一天中光影变化下城堡最美的样子。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`登塔楼梯极为狭窄陡峭且光线不足，务必穿着防滑舒适的鞋子，有幽闭恐惧症或体力不佳者请慎重考虑。在城堡周边及河岸区域游览时，请务必注意个人财物，虽然治安总体良好，但边境地区仍需保持警惕。如果你持有非欧盟护照，请注意不要未经许可接近或试图越过边境线，在河边拍照时也尽量避免将镜头长时间对准对岸的俄罗斯边防设施。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从河岸步道开始，在距离城堡西南侧约两百米的草坪上站定，用最广的视角将纳尔瓦要塞与对岸的伊万哥罗德要塞一同收入眼帘，感受这独一无二的地理对峙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着古老的斜坡走向城堡正门，用手触摸那些被风雨和战火侵蚀出深深沟壑的冰冷石墙，想象几个世纪前士兵们在此巡逻的脚步声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过厚重的拱形门洞进入宽阔的北庭院，抬头寻找城墙雉堞上那些造型朴拙的射击孔，并留意地面上可能残留的古老石雕碎片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进城堡主楼（博物馆），首先踏入光线幽暗、拱顶低矮的底层仓库，这里阴冷的空气和粗糙的石壁瞬间将你拉回到中世纪堡垒的实用主义氛围中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着木楼梯登上二楼装饰相对华丽的骑士大厅，仔细观察墙上展示的历代盾徽、武器和巨幅历史画，试着拼凑出城堡主人的更迭图谱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要挑战那盘旋而上的狭窄石阶，登上“长赫尔曼”塔楼的观景台，让360度的狂风扑面而来，俯瞰脚下如丝带的纳尔瓦河、对岸的俄罗斯以及身后爱沙尼亚的土地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔楼下来后，别忘了探索城堡西侧修复后的城墙步道，从不同的高度和角度回望主塔，并观察外墙上海浪般起伏的防御棱堡痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落时分，请回到河岸步道，找一张长椅坐下，静静看着夕阳将两座城堡的轮廓镀上金边，直到对岸伊万哥罗德的灯光逐一点亮。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡西南侧河岸草地全景位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，阳光从侧面打亮城堡时，在此用广角镜头可以完美框下纳尔瓦要塞、河水及对岸的伊万哥罗德要塞，构图极具故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`北庭院仰拍长赫尔曼塔`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后，阳光能照亮塔楼东侧，站在庭院中心仰拍，利用城堡的矩形轮廓作为天然画框，突出塔楼直插云霄的雄伟气势。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`塔楼观景台西望机位`}</h4>
                  <p className="text-sm text-gray-700">{`下午时段，在塔顶向西拍摄，可以捕捉到阳光洒在纳尔瓦老城区彩色屋顶和教堂尖顶上的温暖色调，与城堡的冷峻形成冷暖对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙步道侧影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，从西侧城墙步道向东拍摄，利用低角度的金色阳光勾勒出主塔和雉堞的锋利剪影，画面充满史诗感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`拱门下的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`利用城堡各个门洞作为天然前景框架，拍摄门洞另一侧的庭院、河流或塔楼，增加画面的纵深感和窥探历史的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`纳尔瓦河面在无风时像一面镜子，是拍摄城堡完美倒影的绝佳时机，多关注天气变化。使用无人机拍摄在此地是严格禁止的，因为涉及敏感的边境空域，切勿尝试。拍摄对岸俄罗斯景象时，动作尽量自然快速，避免长时间瞄准，以免引起不必要的关注。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济实用之选`}</h4>
                  <p className="text-sm text-blue-800">{`纳尔瓦河畔由苏联时期公寓楼改造的简约风格旅馆，房间宽敞明亮，部分窗户能直接瞥见要塞塔尖，步行五分钟即达城堡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`坐落在老城区、由19世纪商人宅邸修复的精品酒店，房间内有裸露的砖墙和老式家具，下楼就能融入安静的古城街道，位置绝佳。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计风舒适居所`}</h4>
                  <p className="text-sm text-yellow-800">{`位于市中心广场附近的现代设计酒店，拥有北欧风格的明亮房间和一间评价极高的餐厅，是探索一天后享受舒适与美食的完美基地。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特河景民宿`}</h4>
                  <p className="text-sm text-purple-800">{`住在河南岸稍远一点的宁静住宅区，房东经营的公寓拥有一个直面两座要塞的大阳台，适合想要静静品味边境晨昏的摄影爱好者或情侣。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`纳尔瓦城市不大，大部分住宿点步行至要塞都在20分钟内，无需担心交通。建议至少提前一个月预订夏季或周末的住宿，尤其是那些特色精品酒店。老城区夜晚非常安静安全，但建议选择有夜间门禁或接待的住所，更为安心。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开纳尔瓦很久之后，那幅两堡对峙的画面依然会清晰地浮现在我的脑海里。但它留给我的，不再仅仅是视觉的震撼，而是一种深沉的历史回响。在这个世界上，有太多景点只是在展示过去的辉煌或自然的壮丽，但纳尔瓦要塞不同，它展示的是历史进程中那些真实的、粗粝的、甚至疼痛的接缝处。它让你直观地看到，文明如何在此碰撞，疆界如何在此划定，普通人的生活又如何在这巨大的地缘板块挤压中顽强地延续。站在塔楼上，风从两个方向吹来，你会前所未有地感受到“边境”二字的重量——它不仅仅是一条线，更是一道刻在大地上的、深深的思考题。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是为什么每一个热爱深度游的旅人都应该来这里。它不是一个轻松愉快的童话小镇，它是一本打开在天地之间的、厚重的立体史书。在这里，你能触摸到欧洲东部历史的冰冷铠甲，也能感受到一个小民族在历史夹缝中存续的温暖体温。它教会我们，理解一片土地，有时需要站在它的边缘，看向“对面”，才能更清晰地看见“自己”。当夜幕降临，两座城堡的灯光在墨蓝色的天幕下悄然亮起，隔河相望，不再像敌对的武士，倒像两位历经沧桑、终于可以安然共看星河的老者。这份在对抗的遗迹上生长出的平静，或许是纳尔瓦送给世界最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rakvere-medieval-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉克韦雷中世纪城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rakvere Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kuressaare-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库雷萨雷主教城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kuressaare Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/parnu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    派
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">派尔努老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pärnu Old Town</p>
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
