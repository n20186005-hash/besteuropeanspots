import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '北欧小众旅行｜林雪平老城实用攻略，新手也能轻松逛 - 最佳欧洲景点',
  description: '林雪平老城是瑞典最适合轻松慢逛的露天老城之一，红木屋、石板路和手工作坊集中在紧凑街区里，很适合安排半日悠闲散步。',
}

export default function LinkpingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '瑞典', href: '/destinations/sweden' },
            { label: '林雪平老城', href: '/attractions/linkping' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">林雪平老城</h1>
          <p className="text-xl text-gray-600 mb-4">Linköping</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">瑞典</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">林雪平</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">我跟你们讲实话，去林雪平老城那天，我本来是没打算去的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">机票酒店全订在斯德哥尔摩，行程表打印出来三张纸，精确到小时的那种。结果呢，到斯德哥尔摩第二天就开始下雨，连着下，下得人什么都不想干。窝在酒店翻手机，翻着翻着看到一张照片——红墙木屋、石板路反着水光、天是那种洗过似的淡蓝色。Gamla Linköping。嚯，就冲这张照片，我把去乌普萨拉的计划扔了，跳上往南的火车。</p>
              <p className="text-gray-700 leading-relaxed mb-4">两个钟头不到，出站的时候雨停了。嗯，这事开头就挺顺。</p>
            </Section>
            <Section title="最佳游览季节">
              <p className="text-gray-700 leading-relaxed mb-4">季节建议：夏季（六至八月）体验最佳，白天很长，傍晚光线柔和，木墙色彩温暖。秋季黄叶配红墙，很适合拍照。冬季雪景漂亮，但下午三点天就黑了，部分小作坊可能提前关门。春季风较大，体感偏凉。各季节各有特色，可根据自己偏好选择。</p>
            </Section>
            <Section title="建议游览时长">
              <p className="text-gray-700 leading-relaxed mb-4">游览时长：如果只走马观花拍照，约两小时足够。若想仔细观看手工艺人现场制作（吹玻璃、做蜡烛、织布等），建议留出至少四小时。老糖果店可以试吃甘草糖——味道比较特别，咸中带甜，还有八角茴香味，喜欢的人很喜欢，不妨先少量尝试。</p>
            </Section>
            <Section title="注意事项">
              <p className="text-gray-700 leading-relaxed mb-4">路面提醒：老城多为石板路，不太平整，建议穿舒适的平底鞋。部分房屋门口挂有“Privat”牌子，表示仍有人居住，请不要擅自进入。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">历史背景简述：林雪平在中世纪是主教驻地，宗教地位较高。20世纪60年代工业化进程中，许多老建筑面临拆除。一群文物保护者将几十栋保存较好的木屋整体编号拆解，用卡车运至现址重新拼装。因此现在的老城并非原始位置，而是一个“搬迁复建”的露天博物馆。走在其中，能闻到松木被日晒后的气味，夹杂着肉桂香，氛围很生活化。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐游览路线：从主入口进入后，建议先往右拐，探访几栋暗红色老木屋（门口种有醋栗丛），比较安静。继续沿石板路走，会路过老消防站，门内停着一辆19世纪的消防马车，红漆和铜铃铛保存完好。之后可到中央广场，夏季有小市场售卖草莓和鲜花。广场旁的老咖啡馆门面不大，推开木门有铃铛声，地板吱呀作响，适合坐下喝杯咖啡，看街景。接着参观老药房，屋内保留19世纪的木柜和瓷罐，标签为手写拉丁文。药房后有一条小路通到老学校后院，那里可以俯瞰老城起伏的屋顶线，红瓦灰瓦交错，天空呈高纬度地区特有的淡蓝色。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">拍照点位：</p>
              <p className="text-gray-700 leading-relaxed mb-4">入口左侧的两层黄房子，上午十点左右光线最佳。</p>
              <p className="text-gray-700 leading-relaxed mb-4">消防站旁边的窄巷子，下午三点以后太阳偏西，石板路上有长影子，适合低角度拍摄。</p>
              <p className="text-gray-700 leading-relaxed mb-4">老学校后面小路尽头的废弃水井旁，有一棵歪脖子苹果树，五月开花时往老城方向拍，前景白花、中景红屋、背景蓝天；冬季树枝挂霜也很有味道。</p>
              <p className="text-gray-700 leading-relaxed mb-4">傍晚老城亮灯后，主街窗户透出暖黄光，适合长曝光拍摄，但晚上风大，需注意保暖。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">周边推荐：林雪平市中心的大教堂值得一看，与老城的木质温暖感不同，教堂是石头建筑，内部肃穆，管风琴音效很好，可以静坐聆听。</p>
              <p className="text-gray-700 leading-relaxed mb-4">还有个空军博物馆，离老城几站公交。本来没抱啥期待，进去发现还真有点料。有架从波罗的海捞上来的老侦察机，保存状态挺好。带小孩的话这地方能玩一下午，能钻驾驶舱模拟操作，小男孩拉都拉不走。情侣就在老城慢慢晃好了，牵着手，累了坐长椅分个冰淇淋。瑞典奶制品真的好，那奶油浓得哟。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">住宿说几句。</p>
              <p className="text-gray-700 leading-relaxed mb-4">林雪平住的大概分三档。市中心连锁商务酒店，干净，但没啥意思，价格北欧标准，懂的都懂。老城里头有一两家老房子改的小客栈，房间不多，窗户推开就是石板路，但得提前很久订，夏天尤其抢手。自驾的话，建议住郊区农庄民宿，价格友好不少，早上推开窗就是麦田，空气凉丝丝的，房东老太太可能端自己做的果酱过来给你抹面包。</p>
              <p className="text-gray-700 leading-relaxed mb-4">预订注意几点。比价网站多看看，瑞典酒店官网有时候有独家折扣，比第三方便宜个百分之十几。一定看清含不含停车，北欧停车费贵得吓人，一晚上两三百克朗跟玩似的。早餐尽量选含早的，外面随便吃顿也得一百多克朗，酒店自助反而划算，腌三文鱼和奶酪随便吃。</p>
              <p className="text-gray-700 leading-relaxed mb-4">避个坑啊，别住火车站正对面那条街。瑞典人平时安安静静的，一喝酒就变个人，周末晚上偶尔有吵闹的。往居民区里头找，安静安全，睡得好比什么都重要。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="先说个要紧的，老城本身不是围起来的景区，没大门也没售票处。你半夜睡不着想过来溜达，石板路随便踩，没人管你。但是！里头那些老作坊、老药房、博物馆，上午十点或者十一点才开门，下午四点多就关了，淡季更随性，有的周末才开。你要周中来，只能扒窗户往里头瞅，咦，里头那些老物件摆得整整齐齐，像主人刚出门买菜去了似的。" />
                <InfoRow icon="🎫" label="门票" value="门票这个事简单，进老城不要钱，瞎逛不要钱，坐路边椅子上晒太阳也不要钱。
想进老房子内部需要买票，通票约120瑞典克朗，学生凭有效学生证可享受优惠，儿童免费。价格每年可能有小幅浮动——北欧整体消费水平较高，但景区票价通常不会太离谱。
地址：谷歌地图直接搜“Gamla Linköping”，定位准确。" />
                <InfoRow icon="📍" label="地址" value="Gamla Linkoping, Tunnbindaregatan 8, 582 46 Linkoping, Sweden" />
                <InfoRow icon="🚌" label="交通" value="从斯德哥尔摩中央车站乘 SJ 火车约 1 小时 40 分至 2 小时到 Linkoping C；出站可乘市内公交 1 路或 2 路前往 Gamla Linkoping，约 10 至 15 分钟，步行约 30 分钟。自驾走 E4 高速进入 Linkoping，景区周边有停车位。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
