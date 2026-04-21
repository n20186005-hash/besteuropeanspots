import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '北欧小众旅行｜奥勒松老城实用攻略，新手也能轻松逛 - 最佳欧洲景点',
  description: '奥勒松是挪威西海岸一座被峡湾与群岛环抱的小城，横跨四座岛屿。1904年一场大火烧毁了大半个城市，之后以当时流行的新艺术风格（Art Nouveau）重建，塔楼、尖顶、花卉纹饰随处可见，整座城就像一座露...',
}

export default function LesundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '挪威', href: '/destinations/norway' },
            { label: '奥勒松', href: '/destinations/norway' },
            { label: '奥勒松老城', href: '/attractions/lesund' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">奥勒松老城</h1>
          <p className="text-xl text-gray-600 mb-4">Ålesund</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">挪威</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">奥勒松</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">奥勒松是挪威西海岸一座被峡湾与群岛环抱的小城，横跨四座岛屿。1904年一场大火烧毁了大半个城市，之后以当时流行的新艺术风格（Art Nouveau）重建，塔楼、尖顶、花卉纹饰随处可见，整座城就像一座露天建筑博物馆。站在山顶俯瞰，碧海、彩屋、远山交错，美得不真实。</p>
            </Section>
            <Section title="建议游览时长">
              <p className="text-gray-700 leading-relaxed mb-4">一天还是两天？看你咋玩。如果只是老城走走、爬个台阶、逛一两个博物馆，一天绝对够。但你要是想出海，或者去附近小岛发呆，再或者坐船进峡湾——那得住两晚。别不信，我就是只订了一晚，结果第二天赶得要死，唉，后悔。</p>
            </Section>
            <Section title="注意事项">
              <p className="text-gray-700 leading-relaxed mb-4">这里的天气，翻脸比翻书还快。上一秒大太阳晒得你戴帽子，下一秒雨就劈头盖脸砸下来。真的，防水外套比雨伞管用一百倍——伞被风吹翻好几次之后我就放弃了。靠，不说了都是泪。</p>
              <p className="text-gray-700 leading-relaxed mb-4">爬阿克拉斯观景台的台阶比较多，穿舒服的鞋子。很多店铺周日不营业，超市和少数咖啡馆除外。大部分地方能刷卡，不用换太多现金。自来水能直接喝。带个充电宝，拍照太费电了。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">说起来挺离谱的。1904年1月23号深夜，一场大火把大半个奥勒松烧了个精光。850栋木房子啊，说没就没了，一万多人无家可归。但奇怪的是——整座城就死了一个人。呃，这运气也算绝了。当时的德国皇帝威廉二世老爱来这儿度假，听说烧了之后，立马派了四艘船送物资、送人过来帮忙重建。此后三年，五十多个挪威建筑师扑在这儿，硬是把全城统一盖成了新艺术风格，挪威人管它叫Jugendstil。你随便走两步就能看到：塔楼、拱窗、墙上的藤蔓花纹、阳台底下雕的花……那种弯弯绕绕的曲线美，在奥勒松保存得比欧洲任何地方都完整。走在大街上，我总觉得每栋楼都有自己的表情——转角的小阳台像是探出脑袋在看你，墙面的浮雕像在低声说话，顶楼的尖塔就那么安静地戳在那儿。唉，这种氛围，光看照片真体会不到。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">一日精华路线（步行版）：</p>
              <p className="text-gray-700 leading-relaxed mb-4">先别急着乱逛。从新艺术中心开始，花个半小时大概了解下这地方怎么回事。它开在一栋老药房里，里面那些展品和互动小装置挺有意思的，不像一般博物馆那么死板。我进去的时候，咦，还看到一个模拟大火的小剧场，做得挺走心。</p>
              <p className="text-gray-700 leading-relaxed mb-4">接着在Brosundet运河区闲逛。内港两岸是彩色木屋和旧鱼仓库改造的咖啡馆、画廊。沿水走，能拍到奥勒松明信片级别的画面。继续往老城深处的街巷走，公寓楼外墙的花卉浮雕、窗台的小铁艺、门廊的曲线装饰，处处是细节。每一栋建筑都值得停下来多看几眼。</p>
              <p className="text-gray-700 leading-relaxed mb-4">中午在港口附近找家海鲜餐厅。鱼汤和三文鱼都很棒，价格不便宜，但值得。</p>
              <p className="text-gray-700 leading-relaxed mb-4">下午爬阿克拉斯山，418级台阶分成了几段，每走一段就有小平台，能看到城市的不同高度。慢慢爬，15到20分钟就能到顶。山顶观景台Fjellstua俯瞰全城，四座岛屿、彩色房屋、远处的峡湾和雪山尽收眼底。要是赶上日落前两个小时上去，光影铺在建筑上，美得让人不想走。</p>
              <p className="text-gray-700 leading-relaxed mb-4">下山后去Sunnmøre博物馆，坐巴士10分钟，在Hessa岛上。露天博物馆展示了传统挪威木屋、渔船和维京历史，比城里的博物馆更有意思。</p>
              <p className="text-gray-700 leading-relaxed mb-4">傍晚回Brosundet找家酒吧或咖啡馆坐坐，结束这一天。</p>
              <p className="text-gray-700 leading-relaxed mb-4">两日深度版：</p>
              <p className="text-gray-700 leading-relaxed mb-4">第二天可以参加峡湾游船，从奥勒松出发去盖朗厄尔峡湾（Geirangerfjord），往返一天，世界遗产级别的风景。或者乘船去附近的Valderøya岛，Signalen灯塔的景色很美。也可以自驾去大西洋公路（Atlanterhavsveien），8公里长，串起多个小岛，被评为世界最美公路之一。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">阿克拉斯观景台：从山顶平台拍城市全景，最佳光线是日落前1-2小时（夏天在晚上9-10点）。带长焦能压缩建筑密度，带广角能框进远处的峡湾。</p>
              <p className="text-gray-700 leading-relaxed mb-4">Brosundet运河区南岸：拍对面彩色木屋的水中倒影。清晨或阴天水面平静，倒影最清晰。偏光镜能消除水面反光。</p>
              <p className="text-gray-700 leading-relaxed mb-4">奥勒松教堂对面的小巷：爬到教堂附近的坡道上回望港口，塔楼和彩色房子错落有致，傍晚时分暖光照在墙面上非常温柔。</p>
              <p className="text-gray-700 leading-relaxed mb-4">Molja灯塔：从码头走过去约15分钟，灯塔和远山、水面的搭配适合拍极简风格。</p>
              <p className="text-gray-700 leading-relaxed mb-4">新艺术中心旁边的小广场：仰拍对面建筑群的塔楼和立面，拼在一起很有气势。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">盖朗厄尔峡湾：距离奥勒松约120公里，被联合国教科文组织列为世界遗产。峡湾两岸瀑布轰鸣，七姐妹瀑布和婚纱瀑布尤其壮观。从奥勒松坐游船过去是最省心的方式，往返约8-10小时。自驾的话可以走老鹰之路（Ørnevegen），11个发卡弯一路盘旋而上，到山顶观景台俯瞰峡湾——心脏不好的不建议开车，但风景绝对值回票价。</p>
              <p className="text-gray-700 leading-relaxed mb-4">大西洋公路：从奥勒松往北开车约2.5小时，8公里长的路段串起多个小岛，被誉为世界最美公路之一。最标志性的那个路段是Storseisundet大桥，设计成一个夸张的弧度，车子冲上去的一瞬间感觉像要飞进海里。建议预留半天往返。</p>
              <p className="text-gray-700 leading-relaxed mb-4">Sunnmøre阿尔卑斯山：奥勒松周边被群山环抱，Hjørundfjord附近的山峰非常上镜。从市区出发开车约1小时就能进入山脚，夏天适合轻徒步，冬天是滑雪胜地。个人游和情侣游比较合适，家庭游客需要评估体力。</p>
              <p className="text-gray-700 leading-relaxed mb-4">Valderøya岛：从奥勒松坐渡轮10分钟就能到。岛上的Signalen灯塔是本地人的秘密观景点，几乎没有游客，可以安安静静地看海、看船、发呆。很适合情侣约会。</p>
              <p className="text-gray-700 leading-relaxed mb-4">Åndalsnes：火车小镇，距离奥勒松2.5小时巴士车程。著名的巨魔之路（Trollstigen）起点就在这里。如果准备坐火车离开，可以顺路安排一晚。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">老城中心的住宿最方便，步行就能到所有景点。Brosundet沿岸的酒店景观好，打开窗户就能看到运河和彩色房子，价格也最高。车站附近的住宿略便宜，但到码头和观景台要走10-15分钟。</p>
              <p className="text-gray-700 leading-relaxed mb-4">预订的话，旺季一定要提前两三个月订，7月奥勒松的住宿供不应求。淡季的话提前一两周就行，有时还能捡到打折房。</p>
              <p className="text-gray-700 leading-relaxed mb-4">停车在老城很麻烦，很多酒店没有自己的停车场，路边车位限时还很贵。自驾的话建议优先选带停车场的住宿，或者停在城外坐公交进城。</p>
              <p className="text-gray-700 leading-relaxed mb-4">住宿类型的话，酒店适合懒得操心的游客，民宿公寓适合家庭或长住的，青年旅舍适合背包客。夏天晚上不冷，有些公寓没有空调也没关系。</p>
              <p className="text-gray-700 leading-relaxed mb-4">避坑：不要住在机场附近，离市区太远了。不要选靠主干道的房间，挪威虽然安静，但卡车经过时震动感还是很明显。有些老城区的木屋看起来很美但隔音差，隔壁说话都能听见。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="整座城市全年全天开放。阿克拉斯观景台（Fjellstua）全天可登，418级台阶随时可爬。新艺术中心（Jugendstilsenteret）：10月至4月11:00-16:00，5月至9月10:00-17:00，周一闭馆。大西洋海洋公园（Atlanterhavsparken）：夏季9:00-19:00，冬季10:00-16:00。博物馆和展览类基本都在傍晚关门，晚上能逛的就只有街景和海港了。" />
                <InfoRow icon="🎫" label="门票" value="新艺术中心成人120挪威克朗，学生和老人90克朗，儿童免费。大西洋海洋公园成人180克朗左右，儿童90克朗。阿克拉斯观景台免费。部分博物馆和美术馆有学生折扣，记得带上学生证。" />
                <InfoRow icon="📍" label="地址" value="Ålesund, Møre og Romsdal, Norway。" />
                <InfoRow icon="🚌" label="交通" value="飞机：奥勒松维格拉机场（AES）距离市中心约20分钟车程，有航班往返奥斯陆、卑尔根、特隆赫姆。机场大巴到市中心约120-150克朗。
火车：奥勒松没有火车站！最近的火车站是Åndalsnes，需要从奥勒松乘巴士约2.5小时抵达，票价约220克朗，再从Åndalsnes乘火车前往其他城市。
巴士：Vy express运营从奥斯陆和卑尔根到奥勒松的夜班巴士，从卑尔根出发约11小时，适合想省一晚住宿的旅行者。
轮渡：Hurtigruten和Havila的沿海渡轮会在奥勒松停靠，是体验挪威西海岸峡湾风光的绝佳方式。
市内交通：主要靠走路。奥勒松核心区不大，徒步完全可以覆盖。想去附近岛屿的话，公交系统也很方便，可以刷信用卡上车。
最佳季节
说真的，6到8月最舒服。气温也就15到25度，不冷不热，关键是白天长得离谱——晚上11点天还亮着，你吃完晚饭还能慢悠悠去爬观景台，拍完照回来发现太阳还没完全落下去。5月和9月人也少点，天气凑合，运气好能看到秋色，但海水有点凉。冬天嘛……呃，想看极光是可以来，但雨雪多到让人想哭，好多船也不开了，第一次来的话真心不建议。哦对了，7月是极昼，夜里12点光线还特别通透，嚯，那种感觉你懂的，像偷了时间一样。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
