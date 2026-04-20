import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科拉欣实用攻略：解锁黑山北部小众玩法，全人群适配 - 最佳欧洲景点',
  description: '景点简介...',
}

export default function KolainPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '科拉欣', href: '/attractions/kolain' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">科拉欣</h1>
          <p className="text-xl text-gray-600 mb-4">Kolašin</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">黑山</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">科拉欣</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">景点简介</p>
              <p className="text-gray-700 leading-relaxed mb-4">说实话，科拉欣压根不像一座正经的旅游小镇。它藏在黑山北部海拔954米的山谷里，被比耶拉西察山和Sinjajevina山夹在中间。小镇沿着莫拉查河两岸铺开，木头房子和老石头桥混在一起。这不是那种让你疯狂打卡的地方，而是适合坐下来发呆喝咖啡的地方。</p>
            </Section>
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">科拉欣的核心区域小得可怜，靠两条腿一个小时就能把主街和河边晃完。不过真正的宝藏不在这两公里之内——它是通往比奥格勒斯卡戈拉国家公园的门户，也是整个黑山北部户外活动的集散地。</p>
            </Section>
            <Section title="最佳游览季节">
              <p className="text-gray-700 leading-relaxed mb-4">真心建议避开7-8月的大太阳。5-6月和9-10月是最好的，气温15-25℃，徒步和拍照都舒服。冬季（12-2月）适合滑雪，雪况稳定但住宿会贵不少。6月的时候，Biogradska Gora森林里满地野蒜，那个气味钻进鼻子里，特别上头。</p>
            </Section>
            <Section title="建议游览时长">
              <p className="text-gray-700 leading-relaxed mb-4">小镇本身半天就够了。如果加上国家公园徒步和峡谷游览，建议预留2-3天。</p>
            </Section>
            <Section title="注意事项">
              <p className="text-gray-700 leading-relaxed mb-4">1、建议用地图的时候确认好有个滑雪场也叫这个名字别走错了哦</p>
              <p className="text-gray-700 leading-relaxed mb-4">2、海拔将近1000米，早晚温差大，夏天晚上也得穿外套。小镇上刷卡的地方不多，很多小店和出租车只收现金。我踩过的小坑——在河边小摊想买个本地奶酪，翻遍口袋只凑出几个钢镚儿，最后只能眼巴巴看着摊主把奶酪收回冰柜。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">科拉欣这个名字据说来自一位叫Kolašin的公爵。逛着逛着发现，这里的石头墙上还留着奥斯曼时期的老痕迹，木头房子的雕花又是奥匈帝国的影子。主街上那几栋老房子，墙面被山风吹得斑驳，屋顶的瓦片歪歪扭扭但就是不掉。下午四五点，夕阳把影子拉得老长，整条街铺满金黄色。当地老头坐在台阶上抽烟，看到游客会点头说句“Dobar dan”。这种烟火气比任何历史教科书都来得实在。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">上午从主街Trg Boraca出发，往河边走。沿着莫拉查河岸往南，15分钟能走到一处视野开阔的弯道，河水在这里撞上石头溅起白色水花。回主街找家咖啡馆喝杯浓缩咖啡。下午打车或开车去比奥格勒斯卡戈拉国家公园，公园入口处付费（3欧元）后继续上山约20分钟到Biogradsko湖边。绕着湖走一圈大约1小时，湖边木板路在旺季人多得有点挤，但往里走几分钟就安静下来了。摸摸那些五六百年的老树干，粗糙得硌手，树皮上的苔藓湿漉漉的。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">主街东侧的老石头台阶，下午4点左右光线从西边斜射进来，拍人像脸上自带柔光效果，背景是褪色的木头屋檐和远处山脊线。莫拉查河拐弯处那个小木桥，上午9-11点顺光，水面反射天空的蓝色，站桥中间往上游拍能把河水、石头和老桥都收进画面。湖边的木板路尽头有块伸出去的大石头，傍晚5-6点逆光拍湖面，湖水平静的时候像块镜子，森林和天空全倒映在水里，按下快门之后发现相机参数还停留在上午的晴天模式，赶紧蹲下来重新调，差点把石头上的苔藓蹭一身。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">比奥格勒斯卡戈拉国家公园。从科拉欣往北开车约20-30分钟到公园入口，再上山20分钟到湖边。整个公园占地5650公顷，1952年成为黑山第一个国家公园。值不值得特意去？太值得了。这是欧洲仅存的几处原始森林之一，里面的树有的活了500年以上。真心没必要打车去——从镇上拼个出租车单程大概15-20欧元，或者报个半日团更省心。</p>
              <p className="text-gray-700 leading-relaxed mb-4">姆尔特维察峡谷。在科拉欣以南往波德戈里察方向，全程徒步约6公里，需要4-6小时。峡谷里的河水有时是乳白色的急流，有时又变成翡翠绿的深潭。需要找当地向导，私人团4人约168美元起。逛完古城顺道走这个峡谷需要一整天体力，新手慎重。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">老城区民宿氛围好，木头地板走起来嘎吱响，窗外就是教堂钟楼，夜里安静得只剩河水流淌的声音。但楼梯又窄又陡，大行李箱别想搬上去——亲测扛了28寸箱子爬三楼，半路把手勒得通红，第二天手掌还肿。郊区民宿便宜不少，但晚上公交少得可怜，最后一班车七八点就没了。真心建议订在老城区边缘、有停车位的地方，走路到主街5-10分钟的距离最合适。淡季（5月和9-10月）房价比冬季滑雪季便宜将近一半，提前两三个月预订能找到性价比很高的选项。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="小镇全天开放。文化遗产博物馆（Heritage Museum）周一至周五9:00-15:00开放。滑雪场Kolašin 1450和Kolašin 1600的运营时间依雪况而定，通常12月中旬至次年3月开放，每日9:00-16:00。国家公园全年开放，旺季（5-10月）通常8:00-20:00，淡季缩短至9:00-17:00左右。" />
                <InfoRow icon="🎫" label="门票" value="科拉欣本身免费逛。比奥格勒斯卡戈拉国家公园成人票3欧元，儿童和团体有优惠。滑雪场一日缆车票成人约25-35欧元，六日通票约150欧元，儿童票100欧元左右。" />
                <InfoRow icon="📍" label="地址" value="科拉欣位于黑山北部，距离首都波德戈里察约90公里，距离塞尔维亚边境约35公里。" />
                <InfoRow icon="🚌" label="交通" value="亲测最靠谱的方式是从波德戈里察坐火车。班次每天三趟，全程约1.5小时，二等座4-6欧元，一等座10-11欧元。沿途会穿过Mala Rijeka高架桥，欧洲最高的铁路桥之一，498米长200米高，火车慢悠悠晃过去的时候往下看有点腿软。大巴每天两到三班，票价7-17欧元，路程差不多也是1.5小时。从波德戈里察机场打车到科拉欣大约75-90欧元，全程1小时左右。别像我一样到了才想起来查班次——最后一趟回波德戈里察的大巴晚上10点多就没了。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
