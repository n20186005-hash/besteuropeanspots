import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '希腊小众旅行攻略｜卡斯托里亚老城实用指南｜亲子  单人  团体全适配 - 最佳欧洲景点',
  description: '景点简介...',
}

export default function KastoriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '卡斯托里亚', href: '/attractions/kastoria' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">卡斯托里亚</h1>
          <p className="text-xl text-gray-600 mb-4">Kastoria</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">希腊</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">卡斯托里亚</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">景点简介</p>
              <p className="text-gray-700 leading-relaxed mb-4">说实话，卡斯托里亚这名字我头几遍都念不顺，希腊北部的小众老城嘛，地图上得放大好几轮才能找到。但亲测，这儿绝对是希腊最被低估的隐藏宝石之一。整个老城像片叶子似的插进奥雷斯提亚达湖里，三面环水，背后是维齐山，车开进来的时候湖面反光刺得我眼睛发酸。七十多座拜占庭教堂散在石板巷子里，走着走着就撞见一座，不用刻意找。皮草贸易在这儿延续了好几百年，老城豪宅的雕花窗棂看着就透着一股旧时代的讲究劲儿，跟雅典、圣托里尼完全不是一个频道。</p>
            </Section>
            <Section title="最佳游览季节">
              <p className="text-gray-700 leading-relaxed mb-4">春秋两季最舒服，四月到六月、九月到十月，气温十几二十度，湖边风微凉，石板路也不发烫。夏天七到八月白天能上三十五度，石板地面晒得烫脚底板，走一会儿就想躲进路边咖啡馆。冬天湖面结冰有种别样的寂寥感，但部分教堂冬季开放时间缩短，真心建议行前确认。</p>
            </Section>
            <Section title="建议游览时长">
              <p className="text-gray-700 leading-relaxed mb-4">一到两天。一天能把老城核心区域加湖边逛完，两天可以慢悠悠地把龙洞和马夫里奥蒂萨修道院都走一遍，顺便在老城巷子里喝杯咖啡发发呆。个人游和人文爱好者建议待两天刚好，情侣慢游待个周末也行，亲子轻逛嘛其实一天足矣，全程没啥高强度攀爬，娃自己也能走下来。</p>
            </Section>
            <Section title="注意事项">
              <p className="text-gray-700 leading-relaxed mb-4">老城石板路被几百年的人脚磨得锃亮，下雨天巨滑，穿防滑的鞋子。教堂内部拍照关闪光灯，有的干脆不让拍，进门先看标志。别像我一样，周二跑到拜占庭博物馆门口吃闭门羹，白走了二十分钟上坡路。湖边的鹅和鹈鹕看着可爱，别喂食也别靠太近。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">逛着逛着发现，卡斯托里亚这地方不需要你刻意去了解历史，它自己会往你感官里钻。走在Doltso区和Apozari区的窄巷里，两边是奥斯曼时期的老宅子，石墙斑驳得恰到好处，木雕阳台探出来半截，窗台上摆着天竺葵，阳光斜照进来的时候墙面泛着一种旧旧的暖黄色。空气里时不时飘来邻居家炖豆子的香味，混着湖边特有的水汽味儿。最初有72座拜占庭和中世纪教堂，54座保留了下来。你不用进博物馆，光是在这些巷子里转悠，看到老人在门口晒太阳、猫趴在台阶上打盹，那种几百年积累下来的生活质感自然就出来了。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">我踩出来的路线是这样的：从湖边主广场出发，沿着湖岸步道往东走个二十分钟到龙洞，洞穴在地下，里面有淡水湖，灯光打下来钟乳石倒映在水面上怪好看的，逛完约半小时。出来往南走，穿过一片小树林就到马夫里奥蒂萨修道院，11世纪的壁画至今颜色还扎眼，外立面画的拜占庭皇帝像值得停下来细看。修道院出来往回城方向走，路过拜占庭博物馆把12到18世纪的圣像画过一遍。然后钻进Doltso区瞎逛，看到哪座教堂开着门就进去瞧瞧，潘纳吉亚·库姆贝利迪基最特别，整个卡斯托里亚就这么一座带穹顶的教堂，9世纪10世纪的老古董了。傍晚绕回湖边长椅坐着，看湖面从蓝变橙再变紫。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">第一个机位在Doltso区的石阶拐角处，具体位置是Aivazis宅邸往上走约三十米那截台阶，上午九点到十一点顺光，拍人像特别出片，背后是老石墙和木窗，随便一站都有复古氛围感。第二个机位在Prophet Elias山顶，下午五点到六点逆光拍老城全景和奥雷斯提亚达湖，整个老城像一片叶子浮在水面上，湖面泛金，效果绝了。第三个机位在湖边步道靠近龙洞入口那段，清晨七点到九点湖面平静得像镜子，天鹅游过的时候倒影特别干净，适合拍湖区空镜和人文小品。第四个机位在拜占庭博物馆正门前那排老树底下，午后两三点树叶漏下来的光斑落在石板地面上，拍老街肌理很有质感。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">逛完老城顺道往东走两公里到Dispilio史前湖滨聚落遗址，公元前五千多年的人就在这儿搭水上木屋了，遗址博物馆里有复原模型，走路约半小时，沿途是小乡村公路，两边是田野和湖景，挺治愈的。冬天来的话往北开十五公里有个Vitsi滑雪中心，规模不大但人少雪好。还有力气的话可以绕湖走一圈，全程约9公里，两小时左右，沿途鹈鹕和天鹅在湖边晃悠，湖边咖啡馆歇脚喝杯希腊咖啡约两到三欧。个人感觉没必要打车去这些地方，走路或自己开车最自在。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">亲测，住Doltso老城区氛围感拉满，传统石木结构的老宅改建的民宿，推开窗就是石板巷和教堂钟楼，但楼梯窄得要命，大行李箱真心慎选。另一个选择也可以是湖边沿岸的现代小旅馆，优点停车方便，视野开阔，缺点就是少了点老城那种烟火气。预订技巧方面，避开七月八月的希腊假期高峰期，价格能便宜三成以上。真心建议提前两个月订，都是钱钱。这地方虽然小众但好房源不多。郊区便宜些但晚上公交车基本没了，没车的话出行不太方便。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="老城本身全天开放，随时能逛。拜占庭博物馆冬季11月到次年3月是上午八点半到下午三点半，夏季4月到10月是上午八点半到下午五点，每周二雷打不动闭馆，亲测周二千万别去，我就踩过这个坑。龙洞夏季4月到10月是上午十点到下午六点，冬季11月到次年3月是上午九点到下午五点，全年无休。民俗博物馆周二到周六上午十点到下午五点，周日上午十一点到下午五点。潘纳吉亚·库姆贝利迪基教堂没固定开放时间，周末做礼拜期间外人进不去，上午九点到十一点去最稳。" />
                <InfoRow icon="🎫" label="门票" value="老城和湖边溜达不要钱。拜占庭博物馆门票10欧，学生和65岁以上老人半价5欧。龙洞门票6欧，儿童3欧。民俗博物馆2欧。教堂基本上都免费进，有些偏一点的需要找看管人开门，运气好的话给一两欧小费就完事了。呃，还有一点别像我一样，老城里不少小商店和咖啡馆只收现金，我当时想买杯希腊咖啡身上只剩卡，尴尬得不行，后来学乖了随身备个二十欧零钱。" />
                <InfoRow icon="📍" label="地址" value="卡斯托里亚老城位于希腊北部西马其顿大区，奥雷斯提亚达湖西岸的半岛上。" />
                <InfoRow icon="🚌" label="交通" value="真心建议首选自驾，从塞萨洛尼基开过来约190公里，走Egnatia高速，大概一小时四十五分钟就到。从雅典过来的话约500公里，得开六小时左右。不想开车的可以坐KTEL长途巴士，从塞萨洛尼基出发每天有好几班直达，票价20欧左右，大概三个半小时。雅典也有巴士直达，但路上得耗大半天。离卡斯托里亚最近的机场是Kozani的Filippos机场，约80公里。市内基本上全靠腿着走，老城路窄坡多，车开不进去，打车也就五到十欧以内。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
