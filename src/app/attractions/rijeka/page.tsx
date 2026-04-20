import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '亚得里亚海小众旅行｜克罗地亚里耶卡，一座兼具历史与活力的港口之城 - 最佳欧洲景点',
  description: '景点简介...',
}

export default function RijekaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '里耶卡老城', href: '/attractions/rijeka' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">里耶卡老城</h1>
          <p className="text-xl text-gray-600 mb-4">Rijeka</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">克罗地亚</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">里耶卡</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">景点简介</p>
              <p className="text-gray-700 leading-relaxed mb-4">里耶卡是克罗地亚第三大城市和最大海港，坐落在亚得里亚海北部的克瓦内尔湾深处。这里不像杜布罗夫尼克那样精致过度，也不像斯普利特那样游客扎堆，反而有一种粗粝的港口气质混合着奥匈帝国遗留下来的建筑优雅，逛起来特别舒服。说实话，里耶卡老城的精华就藏在Korzo步行街两旁那些哈布斯堡时期的彩色楼房之间，走两步就是一间挤满本地人的咖啡馆，再走两步又能撞见古罗马拱门，这种混搭感真的很有魅力。山顶的特尔塞城堡是整座城市的制高点，站在城墙上能一眼望到海湾里散落的岛屿，晴天的时候海面泛着银光，美到让人挪不动脚。</p>
            </Section>
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">里耶卡的地中海气候很舒服，夏天不闷热，冬天也不算太冷。城区面积不大，主要景点都在步行范围内，适合用脚丈量。Korzo是主步行街，市政钟楼、罗马拱门、中央市场、圣维特主教堂全在它周围五百米内，逛起来基本不用坐车。语言方面克罗地亚语为主，但年轻人英语不错，菜单有英文版。货币用欧元，2023年起克罗地亚已正式加入欧元区，不用再换库纳了。签证方面克罗地亚是申根国，持有效申根签可直接入境。</p>
            </Section>
            <Section title="最佳游览季节">
              <p className="text-gray-700 leading-relaxed mb-4">亲测五六月和九十月是最舒服的时间段，气温二十度出头，阳光温柔，游客也不多。我是九月底去的，午后石板路上有点发烫但海风一吹就凉快了，老城里的咖啡座还有阳光晒着，坐一下午都不想起来。七八月暑假人多一些，气温能到三十度，但比杜布罗夫尼克那边还是凉快不少。十一月到三月算淡季，城堡门票便宜一半，就是海风有点大，站在Molo Longo防波堤上头发被吹得打结。冬季如果赶上狂欢节（一月底到二月初），整个城市会变成大型派对现场，当地人穿着兽皮戴着面具身系铃铛在街上跳舞，据说很震撼。</p>
            </Section>
            <Section title="建议游览时长">
              <p className="text-gray-700 leading-relaxed mb-4">真心建议至少留出一整天给里耶卡。半天在老城Korzo一带晃晃，逛逛中央市场，去Molo Longo防波堤尽头吹吹海风看看对面港口的集装箱起重机（很工业风但意外的有味道）。另外半天给特尔塞城堡，包括上下山的时间，城堡里转转、平台上发呆、庭院咖啡厅坐一会儿，两三个小时就过去了。如果时间充裕住一晚更好，傍晚的里耶卡和白天完全两种气质，晚上Korzo的石板路面被灯光照得发亮，当地人在露天座位喝啤酒聊天，那种松弛感是白天体会不到的。想深度慢逛的话两天一夜是最佳方案。</p>
            </Section>
            <Section title="注意事项">
              <p className="text-gray-700 leading-relaxed mb-4">别像我一样没带现金去菜市场买水果，鱼市旁边那个菜摊的老奶奶只收现金，我翻了半天口袋只有一张欧元卡。克罗地亚虽然用欧元，但小摊贩还是习惯现金交易，老城里的咖啡馆基本都刷卡。去特尔塞城堡走Trsat阶梯的话穿双舒服的鞋，石阶被无数朝圣者走过磨得很光滑，下雨天特别滑。城堡观景台风大，傍晚气温降得快，带件薄外套准没错。我去的时候里耶卡的港口区域有些地方在施工，Google Maps导航会把人带到死胡同里，逛着逛着发现前面是围栏只能绕回去。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">里耶卡是个兼具历史和现代的地方，Korzo两边的建筑明显带着奥匈帝国时期的审美，外墙颜色是淡黄、橘红、灰蓝，窗户线条优雅，不新但维护得挺好。这座城市换手太多次了，这中间经历了奥匈帝国、意大利、南斯拉夫轮番统治过，所以走在街上能看到巴洛克钟楼旁边就是意大利风格的拱廊，转个弯又冒出一栋社会主义时期的混凝土建筑，这种不统一的风格反而成了它最迷人的地方。特尔塞城堡最早是罗马人建的瞭望哨，记载是说在中世纪扩建，19世纪被Count Laval Nugent家族接手彻底重修，城堡入口那条龙形族徽至今还在。站在城墙上往下看，脚下就是Rječina河谷，古罗马人在这里监视从内陆通往海岸的道路，和我现在拿着手机拍照的心情大概没啥本质区别。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">逛着逛着发现里耶卡老城很适合从Korzo的市政钟楼出发，往东走到罗马拱门，那个拱门藏在一片老民居之间，抬头看到一道古罗马时代的石拱突然出现在头顶，穿越感很强。然后穿过拱门往海边走就是中央市场，上午去最热闹，鱼市里的银鱼和章鱼在冰床上摆得整整齐齐，空气里全是海水的咸味和鱼腥味。从市场往码头方向走五分钟就能上Molo Longo防波堤，这条长堤一直延伸到海里，走到尽头回头看里耶卡老城的全景，红瓦屋顶层层叠叠从山脚一直铺到半山腰。下午从Trsat阶梯走上去或者坐2路公交上山，逛完城堡去旁边几步路的圣母特萨尔特教堂坐一会儿，教堂门前的广场安静得出奇，和山下Korzo的喧嚣完全不同。晚饭回到老城随便找一家街边的小馆子点一份松露意面配本地白葡萄酒，完美收尾。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">机位1：Korzo市政钟楼正前方，上午9点到11点的顺光，黄墙在阳光下饱和度拉满，人站钟楼下方拱门处仰拍，出片很有老欧洲质感。</p>
              <p className="text-gray-700 leading-relaxed mb-4">机位2：罗马拱门北侧那条叫Dolac的窄巷往里走二十米回头拍，下午4点前后的侧逆光让石拱的纹理特别立体，拱门下偶尔有鸽子飞过，氛围感拉满。</p>
              <p className="text-gray-700 leading-relaxed mb-4">机位3：特尔塞城堡城墙最高处的瞭望台，日落前半小时的黄金光线，整个克瓦内尔湾和远处的岛屿被染成金色，人站在城墙边上让风吹起头发，快门连拍就对了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">机位4：Trsat阶梯中段第三个休息平台，下午光线从背后洒下来，老城红瓦屋顶在脚下铺开，色彩层次分明。</p>
              <p className="text-gray-700 leading-relaxed mb-4">机位5：Molo Longo防波堤最尽头，上午顺光或者傍晚逆光剪影都行，港口塔吊和背后的山体城市同框，工业与人文混搭的构图别处很难拍到。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">从城堡下山顺路走十分钟就到圣母特萨尔特教堂，不收费，内部安静肃穆，外墙是暖色调的米黄色石头，和城堡的粗粝质感形成反差。教堂门口的广场有几棵老树遮阴，坐着吹吹山风很惬意。从老城沿海边往西走大概二十分钟能到里耶卡隧道，二战时期挖的防空洞现在开放给游客走，里面凉飕飕的，夏天去特别解暑，穿出来就是另一片居民区，体验很特别。如果时间充裕，可以坐32路公交去奥帕提亚，大概半小时车程，那边是19世纪奥匈帝国贵族的度假胜地，滨海长廊修得很精致，和里耶卡的粗粝感完全不同，两种风格都看看挺有意思。还有一个相对小众的是Kantrida海滩，从市区坐公交十几分钟，沙滩是卵石滩，水清得能看到底的石头，当地人夏天都在那儿晒太阳。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">亲测住在Korzo附近的老城区民宿氛围最好，有来过的朋友也可以在评论区补充帮助我们完善内容。</p>
              <p className="text-gray-700 leading-relaxed mb-4">我订的那家在一栋百年老楼的顶层，推开木窗就能看到钟楼的尖顶，早上被鸽子咕咕声叫醒，那种感觉是酒店给不了的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">但真心踩过的小坑——老楼没电梯，楼梯窄到箱子得侧着提。</p>
              <p className="text-gray-700 leading-relaxed mb-4">所以老城区民宿携带拖家带口和大行李箱慎选，轻装简行的背包客完全没问题。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果自驾开车来，老城区停车位极少而且贵的，个人建议找稍远一点的带停车位的公寓，或者干脆把车停在市区边缘的公共停车场。</p>
              <p className="text-gray-700 leading-relaxed mb-4">预算充足的可以考虑海边新建的度假型酒店，离老城三四公里，有海景和泳池很是清爽但少了老城的人间烟火气。</p>
              <p className="text-gray-700 leading-relaxed mb-4">预订技巧上，里耶卡游客没有南部多，提前一两周订基本都能找到不错的房源了，淡季价格会更低哦，我九月底住的公寓才不到五十欧一晚折合软妹币也没多少的。</p>
            </Section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
              </p>
              <p className="text-xs text-gray-500 text-center">
                管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">实用信息</h3>
              <div className="space-y-4">
                <InfoRow icon="🕒" label="开放时间" value="主要景点开放时间差别挺大，亲测别想当然。Korzo步行街24小时都开，晚上灯光很美适合散步。圣维特主教堂的参观时间不固定，我去的时候是上午九点到十二点、下午三点到五点左右，具体看教堂当日安排。特尔塞城堡的信息点和博物馆区域每天9:00到17:00开放，但城堡本身因为有咖啡厅和餐厅在运营，下午5点以后仍然可以进入。中央市场上午七点多就开始热闹了，鱼市那栋楼尤其值得去看看，下午两三点基本就收摊了。克罗地亚国家剧院只能看外观，除非刚好有演出。" />
                <InfoRow icon="🎫" label="门票" value="亲测门票这块信息有点乱，网上有人说城堡免费有人说收费，实际上2025年10月15日之后政策有调整。4月到9月的旺季，特尔塞城堡成人票3欧元，退休人员、学生和7到18岁的孩子1.5欧元，两个大人加两个七岁以上孩子的家庭票8欧元。10月到次年3月的淡季，成人票降到2欧元，学生老人孩子只要0.5欧元，家庭票4.5欧元。7岁以下小孩、残疾人士以及里耶卡本市和滨海山区县的居民免费。15人以上团队有10%折扣。注意，下午5点以后所有人免费进城堡。Korzo、罗马拱门、Molo Longo防波堤这些老城核心景点全是免费开放的。圣维特主教堂一般免费但建议投一两欧表示心意。" />
                <InfoRow icon="📍" label="地址" value="特尔塞城堡：Partizanski put 9A, 51000 Rijeka（也有资料写Petra Zrinskog bb，其实指的是同一个地方）。Korzo步行街和市政钟楼：老城正中心，搜Korzo Rijeka就行。里耶卡中央市场：Verdijeva ulica，就在国家剧院旁边那条街。克罗地亚国家剧院：Ul. Ivana pl. Zajca 1。Molo Longo防波堤：港口码头区域，从市场走过去五分钟。" />
                <InfoRow icon="🚌" label="交通" value="从萨格勒布过来的话，大巴是多数人的选择。萨格勒布汽车总站每天有多班直达里耶卡的大巴，全程大概两个半小时到三小时，票价提前买能便宜一些。火车也能坐，但亲测时间更长，沿途景色倒是不错。里耶卡机场很小，航班不多，一般从欧洲其他城市飞过来。市区内交通很方便，去特尔塞城堡可以坐2路公交车，在Trsat Crkva那站下车走几步就到。单程票2欧元，书报摊买往返票大概2.8欧元，上车记得打卡，别像我一样忘了打卡被查票员盯着看半天。从市中心走路上去也完全可行，走Trsat阶梯（Trsatske stube Petra Kružića）大概一公里，台阶五百多级，虽然有点喘但一路上的老石头墙面和回头望的城景绝对值。打车的话，Uber和Bolt在里耶卡都挺方便，从市中心到城堡打车大概5到7欧元。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
