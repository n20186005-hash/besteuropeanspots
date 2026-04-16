import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '亚得里亚海小众旅行｜黑山布德瓦绝美中世纪老城 - 最佳欧洲景点',
  description: '布德瓦老城是黑山海岸线上最经典的中世纪海滨古城之一，城墙、石巷、教堂与亚得里亚海紧贴在一起，非常适合半日到一日慢游。',
}

export default function BudvaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布德瓦老城', href: '/attractions/budva-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布德瓦老城</h1>
          <p className="text-xl text-gray-600 mb-4">Budva Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">黑山</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">布德瓦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">布德瓦老城说大不大说小不小，慢悠悠逛一圈两小时差不多。2500多年历史的古城三面环海一面靠山，被威尼斯人修的城墙围得严严实实。石子路被踩得又光又滑，橙色屋顶层层叠叠堆上去，说实话，站在城墙上往下一看真的有点晕。早上人少的时候，阳光打在石板路上暖洋洋的，墙缝里冒出来的三角梅开得不管不顾，拍出来的照片完全不用修。</p>
            </Section>
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">开放时间：老城本身是24小时开放随便进，但城里的教堂、博物馆、城堡观景台这些有自己的时间表，一般是早9点到晚7点左右，冬季有时候有的会提前关门。</p>
              <p className="text-gray-700 leading-relaxed mb-4">门票：进老城不用掏一分钱，免费。城堡观景台亲测是3.5欧元，教堂随便进不要钱。博物馆单独收费。</p>
              <p className="text-gray-700 leading-relaxed mb-4">地址：Budva, Montenegro。导航搜Stari Grad Budva就行，老城入口在主门（Main Gate）。</p>
              <p className="text-gray-700 leading-relaxed mb-4">交通：最近的是蒂瓦特机场，才20公里，打车25到30欧元左右，千万别直接在机场拦车会贵一些，提前约好或者砍价，别像我一样在门口被要了45欧心疼了好几天。波德戈里察机场远很多，65公里，打车大概50到60欧元。从科托尔过来坐大巴，票价10欧元上下，大概四十分钟晃到布德瓦汽车站，下车走路十五分钟就到老城了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最佳游览季节：</p>
              <p className="text-gray-700 leading-relaxed mb-4">亲测5到6月和9到10月最舒服，温度15到25度，穿个薄外套就够，游客也比七八月份少一半。</p>
              <p className="text-gray-700 leading-relaxed mb-4">冬天过来也还行，人少得像个空城，阳光洒在石墙上安静得只有海鸥叫声，但很多小餐馆会关门，吃饭选择不多。</p>
              <p className="text-gray-700 leading-relaxed mb-4">夏天千万别来，真心建议，沙滩上人挤人到处都是腿，巷子里热得冒油。</p>
              <p className="text-gray-700 leading-relaxed mb-4">建议游览时长：老城本身2到3小时差不多了，连上莫格伦海滩一起的话，半天比较从容。</p>
              <p className="text-gray-700 leading-relaxed mb-4">注意事项：石巷子陡，而且石板滑得不行，穿软底的鞋，高跟鞋绝对后悔。太阳毒，防晒霜带足。</p>
              <p className="text-gray-700 leading-relaxed mb-4">旺季吃饭可能要排队，如果看到海边人特别多中午早点去或者稍微晚点错开人流。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，我在这座古城里走着走着，感觉每块石头都在讲故事。公元前5世纪希腊水手就看上了这片海湾，后来罗马人在这儿修了城镇，再后来威尼斯人从1420年一直统治到1797年，整整快四百年。现在老城里那些橘红色的屋顶、雕花的石窗、生锈的铁门闩，基本都是威尼斯风格。逛着逛着发现，墙壁上有些深色的石块跟旁边的颜色完全不一样，凑近了看，表面有像融化过的痕迹，问了当地人才知道，那是1979年那场大地震之后修复重建留下的痕迹。原来这座看似永恒的小城，在很多年前曾经碎成过一堆瓦砾，花了整整八年才重新拼回我们眼前的样子。但如今你走在里面完全感受不到那场灾难，只有海风从城垛口灌进来，带着咸腥味，还有街边小店里飘出来的烤肉香和橄榄油的味道。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">从主门进去，正对面就是圣伊万教堂那个高高的钟楼，但你先别急着往里走，进门之后右手边有段石阶，顺着往上爬几分钟就到城墙步道。站上去之后整个老城的屋顶像橙色的浪一样往海边涌，亚得里亚海的蓝色在旁边一衬，那个对比真的绝了。从城墙下来之后，随便挑条小巷子往里面钻就行，没有什么固定路线，但大致方向朝着海边走，逛着逛着就会经过三一教堂前面的小广场，再往前就到南端的城堡。城堡有个观景台，花钱上去不亏，日落的时候那几分钟，整个海面从蓝变金再变粉，老城的橙色屋顶跟着变色。逛完从城堡旁边的门洞穿出去，顺着海边的小路走大概十分钟就到莫格伦海滩了。全程不需要坐车不需要导航，真心建议，就靠腿和眼睛。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">城堡观景台（Citadel）：老城南端，花钱上去的那个台子。下午5点到6点逆光拍人像，头发边缘会有层金边，海面波光粼粼的当背景，实拍效果比我想象的好太多了，亲测原图直出。从台子上往下拍老城全景也很绝，橙色屋顶加蓝色海面，根本不需要滤镜。</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城主门右侧的城墙步道：进门别急着往里冲，右手边台阶上去那段城墙，上午9点到11点顺光最合适，刚好能拍到老城小巷的纵深感，石板路的纹理清晰得像刀刻的，两侧老房子把天空夹成一条窄缝，氛围感拉满。</p>
              <p className="text-gray-700 leading-relaxed mb-4">圣伊万教堂前面的小空地：教堂正前方的位置，下午三四点光线斜着打过来，拍人像脸上不会有大片阴影，背景是石头教堂的墙面和钟楼，那种中世纪古城的感觉一下就出来了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">海边城堡外墙的石阶：从城堡往海滩方向走，下坡的时候会经过一段依着城墙外侧的石阶，傍晚5点左右，夕阳斜照过来，石头会泛出暖黄色，海风一吹头发自然飘起来，站那儿随便按一张都很有电影感，我在这儿蹲了快四十分钟就是因为忘了调白平衡，拍出来全是冷色调，后来重拍了才满意。</p>
              <p className="text-gray-700 leading-relaxed mb-4">Mogren Beach入口处的礁石：从老城走过去十分钟，海滩入口左边有片伸出去的礁石。上午顺光拍人坐礁石上海水在脚下的照片，水清得能看见底下的石子，比站在沙滩上拍有层次得多。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">逛完古城顺道走过去，Mogren Beach真的很近，从城堡旁边那个门穿出去，走十分钟就到了，真心没必要打车。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这条海边小路本身就很舒服，一边是老城墙，一边是悬崖和海，风吹过来凉凉的，走到一半还有个山洞穿过去，挺有意思。</p>
              <p className="text-gray-700 leading-relaxed mb-4">莫格伦海滩由两个相连的小海湾组成，水清得不像话，我去的时候是五月末，水还是有点凉，但颜色已经漂亮得不得了，从浅蓝到深蓝一层一层铺开，比市中心那几片挤满躺椅的商业沙滩舒服多了，安安静静的，只有海浪声和偶尔的海鸥叫。</p>
              <p className="text-gray-700 leading-relaxed mb-4">再远一点，圣斯特凡岛大概6公里，坐公交或者打车过去10分钟左右，这个岛上不去是私人酒店，但远拍红屋顶半岛的效果已经足够值回票价了，尤其是日落的时候，红屋顶和金色的海面拼在一起，怎么拍都好看。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">亲测老城里住着氛围是真的一绝。晚上游客散完了，整个老城安静下来，石板路上只剩猫溜达，你坐在窗户边能听见海的声音，那种感觉跟白天完全不一样。</p>
              <p className="text-gray-700 leading-relaxed mb-4">但是，我得说但是，老城的石屋民宿楼梯窄到令人发指，木质楼梯踩上去咯吱咯吱响，而且大部分没有电梯。</p>
              <p className="text-gray-700 leading-relaxed mb-4">我那次扛着行李箱爬了楼层，磨得手心疼，第二天胳膊酸了一天，踩过的小坑，带大箱子的真的慎重。</p>
              <p className="text-gray-700 leading-relaxed mb-4">另外老城里晚上有些餐馆会放音乐，虽然气氛好但如果你睡觉轻的话可能会被吵到。</p>
              <p className="text-gray-700 leading-relaxed mb-4">选海景房的话，窗户望出去直接是亚得里亚海，但价格确实高一些。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果不执着于住在城墙里面，老城外圈靠海的那条街，走路到老城入口也就三五分钟，性价比高不少，而且很多都有阳台能看见海。</p>
              <p className="text-gray-700 leading-relaxed mb-4">郊区便宜是便宜，但晚上公交班次少得可怜，错过了就得花十几欧打车回去，真心建议，住还是住在步行能到老城的地方最省心。</p>
              <p className="text-gray-700 leading-relaxed mb-4">布德瓦住宿整体来说比西欧便宜不少，提前一两个月订的话，黑山布德瓦的小众酒店和民宿选择很多，价格也友好。</p>
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
                <InfoRow icon="📍" label="地址" value="Stari Grad Budva, 85310 Budva, Montenegro" />
                <InfoRow icon="🚌" label="交通" value="从蒂瓦特机场到布德瓦约 20 公里，打车通常 25 至 35 欧元，车程约 25 分钟；从波德戈里察机场过来约 65 公里，车程约 1 小时。长途大巴可从科托尔、波德戈里察和巴尔等地直达 Budva 汽车站，车站步行到老城约 15 至 20 分钟。自驾沿 E65 或 E80 海岸公路进入市区，建议停在老城外停车场后步行入城。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
