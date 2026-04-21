import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '比斯特里察 Bistrița｜探访德古拉伯爵的“故乡”，登顶罗马尼亚最高石砌教堂塔楼 - 最佳欧洲景点',
  description: '车子缓缓驶入比斯特里察的老城区，第一眼抓住你视线的，永远是那座仿佛从大地深处生长出来的、带着灰白色调的石头塔楼。它笔直、瘦削、锋利，像一柄中世纪骑士遗落在时间里的长剑，沉默地刺向特兰西瓦尼亚总是带着一丝忧郁的铅灰色天空。这就是福音教堂的塔楼，罗马尼亚最高的石砌教堂塔尖。当你站在中央广场（Piața ',
}

export default function BistritaEvangelicalChurchSaxonCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '罗马尼亚', href: '/destinations/europe' },
            { label: '比斯特里察-讷瑟乌德县（比斯特里察市）', href: '/destinations/europe' },
            { label: '比斯特里察', href: '/attractions/bistrita-evangelical-church-saxon-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`比斯特里察・Bistrița・罗马尼亚・比斯特里察-讷瑟乌德县（比斯特里察市）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子缓缓驶入比斯特里察的老城区，第一眼抓住你视线的，永远是那座仿佛从大地深处生长出来的、带着灰白色调的石头塔楼。它笔直、瘦削、锋利，像一柄中世纪骑士遗落在时间里的长剑，沉默地刺向特兰西瓦尼亚总是带着一丝忧郁的铅灰色天空。这就是福音教堂的塔楼，罗马尼亚最高的石砌教堂塔尖。当你站在中央广场（Piața Centrală）铺满光滑鹅卵石的地面上仰头看它时，脖子会微微发酸，心里却会涌起一种奇异的安定感——你知道，这就是这座城市的脊梁和心跳。
广场四周，是连续不断的、有着拱形门窗和彩色外墙的联排建筑。这些就是比斯特里察最标志性的“商业拱廊”。清晨，面包房和咖啡馆的香气最先从这些拱廊下飘散出来，混合着老木头、旧书籍和新鲜咖啡豆的味道。阳光斜斜地切过拱券，在石板地上投下长长的、温暖的光影。当地人提着篮子匆匆走过，去市场采购，或只是坐在长椅上，看着游客像我们一样，带着好奇又敬畏的神情四处张望。这里没有大都市的喧嚣，生活以一种近乎中世纪般的、从容的节奏流淌着。你能听到的最响亮的声音，可能是教堂整点报时的钟声，浑厚、悠长，回荡在广场的每一个角落，仿佛在一次次确认：时间在这里，走得格外慢一些。
而比斯特里察最独特的魅力，在于它那层若有若无的“文学滤镜”。你知道吗？布拉姆·斯托克在他那本开创了吸血鬼文学先河的《德古拉》小说里，让主人公乔纳森·哈克乘坐的马车，终点站正是“比斯特里察”。书中写道：“在比斯特里察，我找到了很好的住宿……我被告知，伯爵安排的马车会在这里等我，带我穿越博尔戈山口前往城堡。”虽然斯托克本人从未到过这里，但他通过地图和资料，将这座遥远而陌生的特兰西瓦尼亚城镇，永远地钉在了哥特恐怖文学的殿堂里。于是，当你走过那些拱廊，望向远方喀尔巴阡山朦胧的轮廓时，一丝混合着历史真实与文学想象的神秘凉意，会悄悄爬上你的脊背。这里既是坚实、温暖的日常家园，也是通往传说中黑暗世界的门户——这种双重性，让比斯特里察变得无比迷人。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子缓缓驶入比斯特里察的老城区，第一眼抓住你视线的，永远是那座仿佛从大地深处生长出来的、带着灰白色调的石头塔楼。它笔直、瘦削、锋利，像一柄中世纪骑士遗落在时间里的长剑，沉默地刺向特兰西瓦尼亚总是带着一丝忧郁的铅灰色天空。这就是福音教堂的塔楼，罗马尼亚最高的石砌教堂塔尖。当你站在中央广场（Piața Centrală）铺满光滑鹅卵石的地面上仰头看它时，脖子会微微发酸，心里却会涌起一种奇异的安定感——你知道，这就是这座城市的脊梁和心跳。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "广场四周，是连续不断的、有着拱形门窗和彩色外墙的联排建筑。这些就是比斯特里察最标志性的“商业拱廊”。清晨，面包房和咖啡馆的香气最先从这些拱廊下飘散出来，混合着老木头、旧书籍和新鲜咖啡豆的味道。阳光斜斜地切过拱券，在石板地上投下长长的、温暖的光影。当地人提着篮子匆匆走过，去市场采购，或只是坐在长椅上，看着游客像我们一样，带着好奇又敬畏的神情四处张望。这里没有大都市的喧嚣，生活以一种近乎中世纪般的、从容的节奏流淌着。你能听到的最响亮的声音，可能是教堂整点报时的钟声，浑厚、悠长，回荡在广场的每一个角落，仿佛在一次次确认：时间在这里，走得格外慢一些。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而比斯特里察最独特的魅力，在于它那层若有若无的“文学滤镜”。你知道吗？布拉姆·斯托克在他那本开创了吸血鬼文学先河的《德古拉》小说里，让主人公乔纳森·哈克乘坐的马车，终点站正是“比斯特里察”。书中写道：“在比斯特里察，我找到了很好的住宿……我被告知，伯爵安排的马车会在这里等我，带我穿越博尔戈山口前往城堡。”虽然斯托克本人从未到过这里，但他通过地图和资料，将这座遥远而陌生的特兰西瓦尼亚城镇，永远地钉在了哥特恐怖文学的殿堂里。于是，当你走过那些拱廊，望向远方喀尔巴阡山朦胧的轮廓时，一丝混合着历史真实与文学想象的神秘凉意，会悄悄爬上你的脊背。这里既是坚实、温暖的日常家园，也是通往传说中黑暗世界的门户——这种双重性，让比斯特里察变得无比迷人。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`比斯特里察`} />
                <InfoRow label="英文名称" value={`Bistrița`} />
                <InfoRow label="正式名称" value={`Biserica Evanghelică din Bistrița （比斯特里察福音教堂）`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`比斯特里察-讷瑟乌德县（比斯特里察市）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`特兰西瓦尼亚最北端、保存最完好的萨克森（日耳曼）古城之一，是喀尔巴阡山以北重要的商贸与文化堡垒。`} />
                <InfoRow label="建筑特色" value={`拥有罗马尼亚境内最高的石砌教堂塔楼（高约76米），以及环绕中心广场、精美完整的晚期哥特式与文艺复兴风格商业拱廊建筑群。`} />
                <InfoRow label="建筑风格" value={`以特兰西瓦尼亚萨克森风格的晚期哥特式为主，混搭文艺复兴与巴洛克装饰元素。`} />
                <InfoRow label="文化价值" value={`是萨克森人在东欧定居历史的活化石，展现了中世纪城市规划与商业文明的精髓，更因文学经典《德古拉》而披上一层神秘传奇色彩。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`福音教堂塔楼及博物馆开放时间：夏季（5月至9月）周一至周六 10:00-18:00，周日 12:00-17:00；冬季（10月至次年4月）周一至周六 10:00-16:00，周日关闭。老城公共区域全天开放，但店铺和拱廊通常在上午9点后陆续营业。请注意，教堂内部有时会因宗教活动或私人仪式临时关闭，建议行前在其官方网站或当地旅游信息中心核实。`} />
              <InfoRow label="门票价格" value={`登顶教堂塔楼及参观小型历史博物馆的联票：成人约25罗马尼亚列伊（约5欧元），学生及老人优惠票约15列伊。仅参观教堂中殿内部通常免费，但欢迎捐款以支持维护。6岁以下儿童免费。有时会提供包含老城其他景点的优惠通票，可在旅游信息中心询问。`} />
              <InfoRow label="地址" value={`Piața Centrală 1, Bistrița 420063, Romania`} />
              <InfoRow label="交通方式" value={`最近的国际机场是克卢日-纳波卡国际机场（Cluj-Napoca International Airport, CLJ），距离比斯特里察约110公里。从机场可乘坐出租车（车程约1.5-2小时，费用较高）或先搭乘公交/打车到克卢日火车站，再转乘火车。最经济便捷的方式是从克卢日火车站乘坐区域性列车（Regio）前往比斯特里察，车程约2.5-3小时，班次每天约5-6班，沿途风景如画，穿越特兰西瓦尼亚的田野和丘陵。火车票可在车站现场购买，无需预订。若从布加勒斯特出发，有夜间火车直达，睡一觉就到了。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "比斯特里察的故事，始于12世纪末。当时，匈牙利国王为了巩固王国东部边境，抵御外敌，推行了一项宏大的殖民计划，从今天的德国西部和卢森堡地区，招募了大批手艺精湛的工匠、勇敢的矿工和富于冒险精神的商人。这些人被称为“特兰西瓦尼亚萨克森人”。他们就像一颗颗充满生命力的种子，被撒播在喀尔巴阡山环抱的土地上。1241年，比斯特里察首次被文献记载为“Bistricia”，一个由萨克森人建立的重要定居点。他们带来了先进的法律体系、建筑技术和商业头脑，将这里迅速建设成了连接波兰、匈牙利和瓦拉几亚的繁荣贸易枢纽。羊毛、皮革、金属制品在这里集散，金币叮当作响，市集人声鼎沸。而一座坚固的教堂，不仅是信仰的中心，更是战乱时全城百姓最后的避难所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天看到的福音教堂，其建造史本身就是一部史诗。最初的罗马式小教堂在13世纪中叶就已存在，但萨克森人的雄心远不止于此。从14世纪到16世纪，在近两百年的时间里，他们一代接一代地建造、加固、美化这座上帝的堡垒。教堂的主体采用了坚硬的本地石材，风格是当时流行的晚期哥特式，高耸的线条力求接近天国。然而，真正的传奇是那座塔楼。建造高达76米的纯石砌塔楼，在没有现代机械的中世纪，是一项近乎疯狂的工程。石料需要从遥远的采石场运来，工匠们站在摇晃的木制脚手架上，一块石头一块石头地垒砌。据说，为了确保塔楼的绝对垂直，他们使用了最原始的水准仪和铅垂线，并将许多代表家族荣耀或工匠骄傲的标记，秘密地刻在了看不见的石块内部。塔楼最终在16世纪初完工，它不仅是当时的技术奇迹，更是一个响亮宣告：我们萨克森人，在这里扎根了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但和平与繁荣并非永恒。特兰西瓦尼亚一直是兵家必争之地。蒙古铁骑、奥斯曼土耳其的威胁、哈布斯堡王朝的统治……战火数次波及这座城池。最毁灭性的一次打击发生在19世纪。1847年，一场起因不明的大火，像魔鬼的舌头一样舔舐了整个老城。木结构的房屋、积累了几个世纪的财富和艺术品，在烈焰中化为灰烬。你如今看到的那些色彩柔和、立面优雅的拱廊建筑，绝大多数都是在那场大火之后重建的。萨克森市民没有灰心，他们用保险赔偿和集体资金，以当时流行的新古典主义和文艺复兴复兴风格，在原址上建起了更规整、更漂亮的联排屋，形成了我们今天看到的、和谐统一的广场景观。这场涅槃重生，反而赋予了比斯特里察老城一种独特的、19世纪的浪漫气质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当然，比斯特里察无法避开20世纪的历史洪流。两次世界大战深刻改变了这里的人口结构。许多萨克森人在二战后期及战后离开了生活了数百年的家园，返回德国或移居他国。他们的离去，留下了一片文化的空白，也留下了一座建筑的空壳。教堂的钟声一度变得稀疏。然而，故事并未终结。罗马尼亚政府以及后来的民间组织，开始了漫长而精细的修复工作。更重要的是，新的居民——罗马尼亚人、匈牙利人——入住并爱上了这些老房子，让它们重新充满炊烟和笑声。而布拉姆·斯托克《德古拉》带来的全球性名声，则为这座城市注入了新的、充满想象力的生命力。如今，走在比斯特里察，你感受到的是一种奇妙的层次感：萨克森人的严谨与坚固沉淀在石头里，罗马尼亚的田园诗意流淌在空气中，而德古拉的传说，则像夜雾一样，为一切增添了一份刺激的悬念。这是一座从真实历史与虚构传说中同时获得力量的城市。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的早晨，最好是工作日，开始探索比斯特里察。这样你能避开周末可能出现的少许人流，独享老城的宁静。整个深度游览大约需要5-6小时，节奏可以放得非常慢。从中央广场开始，先建立整体印象，然后深入教堂内部并勇登塔顶，这是全天的高潮和体力挑战。之后，沿着拱廊悠闲漫步、吃午餐、逛逛小店，下午再去探索安静的教堂墓地和老城墙遗迹，最后在黄昏时分回到广场，感受光影变幻。这样的安排由动到静，由震撼的宏观到细腻的微观，能让你全方位地沉浸在这座古城的多重魅力中。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`攀登教堂塔楼的楼梯极为狭窄陡峭且昏暗，务必穿着舒适防滑的鞋子，有幽闭恐惧症或严重膝盖问题者请慎重考虑。老城中心区域非常安全，但建议将贵重物品贴身放好，在拍照时也不要完全忽视随身背包。许多小店和博物馆周一下午或周二全天可能休息，安排行程时最好提前查看。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一缕阳光洒在中央广场的鹅卵石上时，先从各个角度仰望那座令人屏息的、灰白色的福音教堂高塔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开教堂沉重的木门，让眼睛适应内部略显昏暗的光线，静静聆听脚步在空旷中殿石地上的回响，寻找那些幸存下来的中世纪壁画和雕刻细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓足勇气开始攀登那狭窄、旋转、似乎永无止境的塔楼石阶，在喘息中触摸粗糙的古老石壁，直到登上塔顶平台，让特兰西瓦尼亚的田野和远山像画卷一样在眼前轰然展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔上下来后，绕到教堂侧面，走进那片古树参天、墓碑斑驳的宁静墓地，感受时间在此沉淀的平和与肃穆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到阳光下的广场，顺着彩色外墙的拱廊一家家店铺看过去，在面包店买一个刚出炉的“科泽纳克”甜面包，或是找一家咖啡馆坐在拱廊下发呆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过拱廊的某一处拱门，拐进旁边静谧的小巷，去寻找老城墙残存的遗迹和隐藏其中的萨克森传统民居的红瓦屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在广场边找一家挂着德古拉主题装饰、但食物却非常地道的餐厅，点一份酸菜炖猪肉和一碗热汤，慰藉爬塔后饥肠辘辘的肚子。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，再次回到广场中央，看夕阳将教堂塔楼和拱廊建筑染成金黄色，等待华灯初上，感受古城从白日的明朗切换到夜晚的神秘氛围。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`中央广场东南角仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒出教堂塔楼凌厉的线条和拱廊建筑的立体感，用广角镜头将塔楼、拱廊和天空一并纳入构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`拱廊内部纵深拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光充沛的上午，站在拱廊的一端，利用拱券形成的天然框架和地面石板的光影引导线，拍摄纵深感的场景，等待一个当地人走过的瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`教堂墓地秋景`}</h4>
                  <p className="text-sm text-gray-700">{`如果是秋季，下午柔和的光线穿过金黄或火红的树叶，照射在古老的十字架墓碑和苔藓上，使用大光圈镜头虚化前景落叶，焦点对准一块有特色的碑文。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城小巷仰望塔楼`}</h4>
                  <p className="text-sm text-gray-700">{`从广场旁任一条狭窄的小巷往回看，让两侧色彩斑驳的民居作为画框，聚焦远处耸立的教堂塔尖，这种构图能生动展现古城的生活气息与信仰中心的对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“德古拉”主题细节`}</h4>
                  <p className="text-sm text-gray-700">{`寻找那些与小说相关的趣味元素，比如餐厅的吸血鬼招牌、旅游纪念品店里的哥特式装饰，用微距或中焦段拍摄这些充满故事性的细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内部和墓地进行拍摄时，请务必保持安静和尊重，关闭闪光灯，并注意是否有禁止拍摄的标识（尽管中殿通常允许）。当地人对于被直接拍摄肖像可能比较敏感，建议以环境人像或背影为主，若想拍摄正面，一个友好的微笑和事先征询永远不会错。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城中心的怀旧之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住广场拱廊建筑楼上由老宅改造的精品公寓，推开木框窗户就能看到教堂塔楼，夜晚能听到隐约的钟声，仿佛住在中世纪商人的家里。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河畔宁静花园民宿`}</h4>
                  <p className="text-sm text-green-800">{`位于比斯特里察河畔，距离老城步行约十分钟，由一对亲切的罗马尼亚老夫妇经营，房间整洁温馨，早餐是自家果园的水果和女主人手工果酱，花园里可以喝下午茶。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色体验“德古拉”主题旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`城郊一家以德古拉传说为主题的特色旅馆，装饰充满哥特式趣味但绝不恐怖，提供前往附近博尔戈山口的旅行信息，适合文学爱好者和寻求另类体验的年轻人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`舒适现代的高性价比酒店`}</h4>
                  <p className="text-sm text-purple-800">{`就在老城边缘，步行三分钟即到广场，现代装修与古城形成有趣对比，房间宽敞明亮，提供免费停车场，是自驾游客的完美基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城内的住宿通常位于历史建筑中，隔音可能不如现代酒店，但那份穿越感无可替代；如果你对睡眠环境要求极高，河畔或城边的选择更安静。夏季旅游旺季和十月底万圣节前后（德古拉主题热门时段）住宿相当紧俏，务必提前数月预订。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开比斯特里察好些天了，但脑海里总会不时闪过那个画面：我站在塔楼顶上，扶着冰凉的石栏，风很大，吹得头发乱飞。脚下是红色屋顶的海洋，整齐得像积木，一直蔓延到绿色的原野和青灰色的山脉脚下。那一刻，没有德古拉，没有吸血鬼传说，只有一个非常真实、非常坚韧的人类家园，在喀尔巴阡山的怀抱里躺了八百年。我突然明白了这座城市的魔力是什么。它像一本用石头写成的书，封面是哥特小说那惊悚诱人的标题，但内页却是由萨克森工匠的汗水、商人的精明、普通市民面对火灾和战乱后的重建勇气，以及如今居民平淡日常的烟火气，一页一页实实在在地填满的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求刺激、热衷打卡标签的快节奏世界里，比斯特里察提供了一种更深厚、更复杂的旅行体验。它允许你同时做一个历史考古者、建筑欣赏者、文学幻想家，最后，做一个安静的观察者。它不迎合你，只是静静地在那里，等你去发现它的每一层肌理。当你穿过拱廊的阴影，触摸塔楼粗糙的石壁，或只是在广场长椅上看着鸽子起落，你会感觉到一种罕见的“时间的重量”。这种重量不是压抑，而是一种 grounding 的力量，让你从虚拟和浮躁中暂时抽离，脚踏在坚实的、有故事的土地上。所以，如果你厌倦了浮光掠影，渴望一场能沉到历史纹理和地域灵魂深处的旅行，那么，请一定要来比斯特里察。它不是欧洲最闪耀的名字，但绝对是最值得你细细品读的那一个。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alba-carolina-citadel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔巴尤利亚七芒星卡罗莱纳城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alba Carolina Citadel</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sibiu-old-town-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡比乌老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sibiu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/biertan-fortified-church-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    别
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">别尔坦设防教堂（特兰西瓦尼亚的萨克森堡垒教堂）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Biertan Fortified Church</p>
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
