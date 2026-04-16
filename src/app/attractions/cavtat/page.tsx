import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '亚得里亚海小众旅行｜克罗地亚察夫塔特，绝美海滨小镇 - 最佳欧洲景点',
  description: '察夫塔特是杜布罗夫尼克以南最适合慢游的海滨小镇，白墙红瓦、棕榈海湾和安静步道把亚得里亚海的松弛感拉得很满。',
}

export default function CavtatPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '察夫塔特', href: '/attractions/cavtat' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">察夫塔特</h1>
          <p className="text-xl text-gray-600 mb-4">Cavtat</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">克罗地亚</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">察夫塔特</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">从杜布罗夫尼克坐公交半小时就能到的察夫塔特，简直是亚得里亚海边被遗忘的宝藏。小镇依山面海，白色石灰岩老房子配着橘红色陶土屋顶，港口里停满了小帆船，海面静得发绿。</p>
              <p className="text-gray-700 leading-relaxed mb-4">说实话，这里游客真不多，和杜城那种人山人海完全是两个世界。</p>
              <p className="text-gray-700 leading-relaxed mb-4">沿着海岸边棕榈树掩映的林荫大道慢慢走，三三两两的当地老人在长椅上晒太阳聊天，空气里飘着烤肉香和松树清味，街角咖啡店的咖啡香让人忍不住想坐下来喝一杯。</p>
              <p className="text-gray-700 leading-relaxed mb-4">亲测，如果你想找一个人少、不闹、能真正放松下来的克罗地亚小众海滨目的地，察夫塔特绝对值得来。</p>
            </Section>
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">开放时间：老城全年开放，公共海滩免费进出。</p>
              <p className="text-gray-700 leading-relaxed mb-4">主要室内景点有季节限制：Rector‘s Palace镇博物馆</p>
              <p className="text-gray-700 leading-relaxed mb-4">淡季（11月-次年3月）周一至周五09：00-15：00、周六09：00-13：00、周日闭馆，</p>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（4月-10月）周一至周六09：00-16：00、周日闭馆。Racic家族陵墓仅在旺季5月1日至10月31日开放，周一至周六09：00-16：00，周日和节假日关闭。</p>
              <p className="text-gray-700 leading-relaxed mb-4">St. Nicholas教堂周一关闭，周二至周五10：30-19：30开放，其他时间开放时间不固定。</p>
              <p className="text-gray-700 leading-relaxed mb-4">门票：</p>
              <p className="text-gray-700 leading-relaxed mb-4">Rector’s Palace成人票4欧元，学生和65岁以上长者2.5欧元，家庭票10欧元，10人以上团体3欧元，ICOM和CMA会员免费。Racic陵墓成人4欧元，学生和长者2.5欧元，家庭10欧元。St. Nicholas教堂免费进入，有时需捐赠1欧元作为维护费。以上门票价格仅供参考，建议出发前上官网确认最新票价避免有变动。</p>
              <p className="text-gray-700 leading-relaxed mb-4">地址：Cavtat Old Town，20210 Cavtat，Croatia，直接定位老城入口或公车终点站即可。</p>
              <p className="text-gray-700 leading-relaxed mb-4">交通：从杜布罗夫尼克老城Pile Gate附近坐Libertas公交10路，直接到察夫塔特总站，班次大概每小时一趟，单程40分钟左右，票价在车上找司机买是15库纳（约2欧元），别像我一样上车才发现只收现金，而且司机不找大额钞票。提前在车站旁的报亭或酒店前台买票是12库纳（约1.6欧元），省事又便宜。</p>
              <p className="text-gray-700 leading-relaxed mb-4">也可以从杜城旧港坐渡轮直达，约30分钟，票价大概15欧元，更贵但海景无敌。</p>
              <p className="text-gray-700 leading-relaxed mb-4">打车从杜布罗夫尼克老城过去大概320-380库纳，约43-51欧元，真心没必要。</p>
              <p className="text-gray-700 leading-relaxed mb-4">从杜布罗夫尼克机场（DBV）直接到察夫塔特有Libertas公交38路，9分钟左右到，每天只有5班，打车也就5分钟、90-110库纳。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最佳游览季节：</p>
              <p className="text-gray-700 leading-relaxed mb-4">亲测5月中下旬到6月上旬、9月中旬到10月中旬的肩季体验最舒服。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这个时候天气暖和但不燥热，白天平均20-26度，海水还能下水游泳，你要是在海边走就可以看到三三两两的当地人在水里泡着 游客也没7-8月高峰多，住宿价格明显便宜。</p>
              <p className="text-gray-700 leading-relaxed mb-4">夏天7-8月最高温度在29度上下，适合泡海滩，但老城石板路正午发烫，走两步一身汗。</p>
              <p className="text-gray-700 leading-relaxed mb-4">11月到3月是淡季，温度在6-15度之间徘徊，不少民宿和餐厅直接关门歇业，海边风大，比较冷清。</p>
              <p className="text-gray-700 leading-relaxed mb-4">建议游览时长：</p>
              <p className="text-gray-700 leading-relaxed mb-4">慢悠悠逛的话，3-4小时能走完老城和海边步道。如果加上泡海滩、坐下来喝咖啡、参观一两个室内景点，真心建议预留大半天甚至一整天。</p>
              <p className="text-gray-700 leading-relaxed mb-4">我当天是上午10点左右到，先沿着海边走一圈，然后钻进老城小巷子乱逛，在码头边吃了顿午饭，下午在Zal海滩晒了一个多小时太阳，赶着傍晚的日落离开，时间刚刚好。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果你是摄影爱好者或特别享受慢节奏的人，住上一晚是最佳选择。</p>
              <p className="text-gray-700 leading-relaxed mb-4">注意事项：</p>
              <p className="text-gray-700 leading-relaxed mb-4">这里很多咖啡馆、小卖部和公共厕所只收现金，一定要带够欧元现钞，最好带点硬币和小面额有些场景用得到比如上厕所什么的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城有些路段是碎石铺的，女生穿细跟高跟鞋真心不方便走路，穿舒服</p>
              <p className="text-gray-700 leading-relaxed mb-4">的平底鞋或凉鞋最明智。去Racic陵墓需要爬一大段台阶，大概有100多级，膝盖不好或者带婴儿车的游客做好心理准备。</p>
              <p className="text-gray-700 leading-relaxed mb-4">海边岩石区域比较滑，游泳时注意踩稳。夏季紫外线很强，帽子墨镜防晒霜一样不能少。</p>
              <p className="text-gray-700 leading-relaxed mb-4">总体来说察夫塔特治安算非常好了，当地居民友善，但贵重物品还是随身带好。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，在察夫塔特逛着逛着，你会发现这个小镇的历史感不是写在标牌上的，而是踩在脚下的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城最初是公元前6世纪希腊人从科林斯来建的殖民城邦，那时候叫Epidaurus。</p>
              <p className="text-gray-700 leading-relaxed mb-4">后来罗马人接手，成为重要港口城市。走到Tiha街那一段，路边还能看到散落的古罗马墓碑和石雕残片，就那样露天摆着，当地人早已见惯不怪，游客偶尔驻足看两眼。</p>
              <p className="text-gray-700 leading-relaxed mb-4">公元7世纪斯拉夫人和阿瓦尔人入侵时，一批难民从这里逃往北边的一个小岛，那个避难所后来慢慢发展成了今天的杜布罗夫尼克——所以某种程度上，察夫塔特是杜城的“母城”。</p>
              <p className="text-gray-700 leading-relaxed mb-4">现在你走在老城里，脚下是光滑发亮的鹅卵石窄巷，头顶是白墙红瓦，墙上偶尔能看到文艺复兴时期的石窗花和徽章。</p>
              <p className="text-gray-700 leading-relaxed mb-4">沿海步道边那些成排的老松树和棕榈树，有些已经上百年了，树干粗得要两个人才能合抱。</p>
              <p className="text-gray-700 leading-relaxed mb-4">傍晚时分，落日把老城墙染成暖金色，渔船发动机的突突声和海鸥的叫声混在一起，空气里夹着海盐的咸味，整个人就只想坐在长椅上看天慢慢变暗。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">我当天是这么走的，亲测下来节奏刚好：</p>
              <p className="text-gray-700 leading-relaxed mb-4">先在老城入口处的公交站下车，直接往海边走，先逛滨海的Obala Ante Starčevića海滨长廊，这条步道沿着整个海湾绕一圈，大概走20多分钟。</p>
              <p className="text-gray-700 leading-relaxed mb-4">逛着逛着发现在长廊中段可以拐进老城中心——先去看St. Nicholas教堂，免费进，里面的祭坛画和木雕圣像值得细看，花个10-15分钟就够了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然后从教堂往东南走约200米就是Rector’s Palace，里面藏了19世纪法学家Baltazar Bogišić的大量手稿，还有本地考古出土的伊利里亚和古罗马时期的陶器、钱币，说实话展品不算特别多但很精致。</p>
              <p className="text-gray-700 leading-relaxed mb-4">出来以后继续往半岛方向走，跟着路边棕色的Mausoleum指示牌，爬大概10分钟的台阶和坡道，到达山顶墓园里的Racic家族陵墓。这个地方是克罗地亚著名雕塑家Ivan Meštrović1922年设计建造的，纯白石材，八角形穹顶，内部雕刻精美得让人说不出话。</p>
              <p className="text-gray-700 leading-relaxed mb-4">山顶俯瞰整个海湾和远处的岛屿，视野太棒了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">下山回到海边后，可以沿半岛南侧的海边小径往Zal海滩方向走，全程约1公里多，沿途有很多可以下水的岩石小湾，水清澈得能看到底下的鹅卵石。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果你时间充裕，真心建议在Zal海滩找张躺椅（租一天大概8欧元），或者直接铺条浴巾在树荫下，游个泳、发发呆。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">亲测以下三个机位出片率很高：</p>
              <p className="text-gray-700 leading-relaxed mb-4">第一个是Racic陵墓正前方的小广场，站在陵墓台阶往下拍海湾方向，上午9点到11点顺光，能把白色陵墓、湛蓝海水和远处的绿色山丘一起框进去，人像站侧边小石门处更有感觉。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第二个是圣尼古拉斯教堂正对的码头防波堤，傍晚5点到6点逆光，夕阳从教堂侧面斜打过来，石头建筑泛金光，拍剪影人像特别有氛围，还能把停泊的渔船和远处的山脉拍进背景。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第三个是老城小巷子随便走，说实话最有感觉的不是某个特定点，而是那些窄到只能过一个人的石板巷子。</p>
              <p className="text-gray-700 leading-relaxed mb-4">具体来说，从Rector’s Palace往山上走左手边第三条巷子，名叫Put od Tabora，两侧墙面被海风侵蚀出斑驳纹理，地面鹅卵石被踩得光滑反光，下午2-4点阳光透过狭窄墙缝洒下来，拍复古石板街肌理照绝了，不用滤镜都好看。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">逛完察夫塔特老城顺道走过去，真心没必要打车：沿着海岸往北步行约30分钟（2公里左右），会经过一连串小海湾，沿途有当地人钓鱼、游泳，氛围特别悠闲。</p>
              <p className="text-gray-700 leading-relaxed mb-4">其中Rat海滩是一段鹅卵石湾，面积不大但水特别清，因为附近有Ljuta河淡水汇入，下水凉凉的特别舒服，旺季人比较多，建议上午早点去。</p>
              <p className="text-gray-700 leading-relaxed mb-4">继续往北走能到Mlini小镇，也是一个安静的度假小村，有一片长长的鹅卵石海滩和几家海边餐厅。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果你有车或者时间充裕，科纳维尔山谷（Konavle Valley）绝对值得特意前往，开车20分钟左右。</p>
              <p className="text-gray-700 leading-relaxed mb-4">山谷里是大片葡萄园和橄榄林，还能吃到最地道的农家烤羊肉和自制葡萄酒。</p>
              <p className="text-gray-700 leading-relaxed mb-4">有的攻略会安利旁边的索科尔古堡，确实是个14世纪的硬核要塞，风景绝绝子。</p>
              <p className="text-gray-700 leading-relaxed mb-4">但！没车的话、千万别学我硬腿儿走上去……从山谷往上爬，40多分钟大上坡，夏天走完直接“原地升天”，人没了半条命。</p>
              <p className="text-gray-700 leading-relaxed mb-4">杜布罗夫尼克本尊就不用多吹了，坐10路公交原路返回就行，车多得像地铁，巨方便。</p>
              <p className="text-gray-700 leading-relaxed mb-4">不管你是人文控去古城狂刷遗迹，还是小情侣海边瘫着看日落，或者带娃去Zal海滩踩水——这地儿都能给你安排得明明白白，节奏自己调。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">先说察夫塔特老城里的民宿，氛围感直接拉满。好多都是上百年的石头房子爆改的，推开窗就是海景，晚上能听着海浪声入睡，谁懂啊🌊</p>
              <p className="text-gray-700 leading-relaxed mb-4">但！老城巷子窄得跟迷宫似的，台阶多到怀疑人生。如果你拖大箱子，建议提前滴滴房东，卖个萌求帮忙扛一下，不然分分钟累成狗。</p>
              <p className="text-gray-700 leading-relaxed mb-4">想性价比高一点？步行10分钟到海边的公寓，价格比老城便宜差不多30%，房间还更大。有的带阳台+小厨房，住着就俩字：舒坦。</p>
              <p className="text-gray-700 leading-relaxed mb-4">我住的那家，老城往东走400米左右，楼下就有小超市，买水买零食巨方便，碳水自由+饮料自由一键达成。</p>
              <p className="text-gray-700 leading-relaxed mb-4">📅 预订玄学：</p>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（7-8月）价格虽然涨，但比隔壁杜布罗夫尼克便宜约30%，提前3-4个月订，选择多到挑花眼。</p>
              <p className="text-gray-700 leading-relaxed mb-4">淡季（11月-次年3月）来的话，一定要先确认民宿开没开门！有些小旅馆直接关门歇业，线上状态没更新，别问我是怎么知道的😇</p>
              <p className="text-gray-700 leading-relaxed mb-4">🚗 自驾党注意：订房前一定问清楚有没有停车位！老城周边车位比中彩票还难找，很多只能停到公共停车场再腿儿着进去。</p>
              <p className="text-gray-700 leading-relaxed mb-4">✈️ 赶早班机党狂喜：如果想离机场近，选察夫塔特东侧靠近机场方向的住宿。打车5分钟就到，比从杜城赶飞机轻松一个银河系，多睡半小时不香吗？</p>
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
                <InfoRow icon="🕒" label="开放时间" value="全天开放" />
                <InfoRow icon="🎫" label="门票" value="免费" />
                <InfoRow icon="📍" label="地址" value="Cavtat Old Town, 20210 Cavtat, Croatia" />
                <InfoRow icon="🚌" label="交通" value="从杜布罗夫尼克汽车总站乘 10 路公交约 35 至 40 分钟到 Cavtat 终点站，步行 3 分钟入老城；杜布罗夫尼克机场距小镇约 5 公里，打车约 10 分钟。夏季也可从杜布罗夫尼克旧港坐船直达，航程约 40 至 45 分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
