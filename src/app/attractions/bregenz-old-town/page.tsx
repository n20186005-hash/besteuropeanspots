import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布雷根茨老城 Bregenz Old Town｜博登湖畔的中世纪山城明珠 - 最佳欧洲景点',
  description: '爬上一段缓坡，瞬间就从博登湖畔的现代剧院区，跌进了一个铺满鹅卵石、墙壁刷成暖黄色的童话世界，这就是布雷根茨老城给我的第一印象。它不像那些挤满游客的大城市老城，这里安静得能听见自己的脚步声和远处教堂的钟响。老城盘踞在一座小山上，像个害羞的少女，从狭窄巷道的缝隙里，你能瞥见山下那片巨大的、蓝得像宝石的博...',
}

export default function BregenzOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布雷根茨老城', href: '/attractions/bregenz-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布雷根茨老城</h1>
          <p className="text-xl text-gray-600 mb-4">Bregenz Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">奥地利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">布雷根茨</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">爬上一段缓坡，瞬间就从博登湖畔的现代剧院区，跌进了一个铺满鹅卵石、墙壁刷成暖黄色的童话世界，这就是布雷根茨老城给我的第一印象。它不像那些挤满游客的大城市老城，这里安静得能听见自己的脚步声和远处教堂的钟响。老城盘踞在一座小山上，像个害羞的少女，从狭窄巷道的缝隙里，你能瞥见山下那片巨大的、蓝得像宝石的博登湖，那种“湖光山色尽在脚下”的感觉特别奇妙。空气里混合着咖啡香、老木头的气息，还有从湖边飘来的湿润水汽。随便走进一家家庭餐馆，点一份地道的福拉尔贝格州奶酪面，看着窗外历经数百年的彩色房屋，时间好像真的慢了下来。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城街道和广场全年全天开放。但核心历史建筑如拥有洋葱顶的圣马丁塔楼（世界上最大的巴洛克式木制穹顶塔楼）和布雷根茨州立博物馆，开放时间常有调整，冬季可能缩短，建议行前官网查询。许多小型博物馆周一闭馆。门票方面，持有“布雷根茨卡”或“博登湖国际票”可能享有折扣。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">布雷根茨的故事可以追溯到公元前1500年左右的凯尔特人定居点，但真正让它在历史上留下名字的是罗马人。公元5世纪罗马帝国衰落后，这里成了阿勒曼尼人的地盘。快进到中世纪，布雷根茨在13世纪获得了城市权，并修筑了城墙，老城的格局基本就是在那个时期定型的。你可以摸摸那些厚实的城墙基底，感觉能触碰到八百年前的石头温度。15世纪，它成为了哈布斯堡王朝的前哨，命运随之起伏。老城里最显眼的圣马丁塔楼，最初是罗马式教堂的钟楼，在16世纪末被改造成了现在我们看到的、戴着巨大洋葱帽的巴洛克模样，特别可爱，成了整座城市的地标。历史上，布雷根茨经历过几次大火和战争，但老城核心总是被顽强地重建和保存下来。二战后的重建更是精心，所以今天我们看到的不是破败的遗迹，而是一个活着的、充满生活气息的中世纪社区。走在街上，你会觉得历史不是教科书上的文字，而是你脚下光滑的石头和身边墙壁褪色的彩绘。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">游览建议从山下的火车站或湖畔剧院区开始，步行上山（约10-15分钟），以老城中心的圣马丁广场为起点和核心，环绕主要街道和城墙遗迹漫步，最后登上圣马丁塔楼俯瞰全景。全程步行游览，节奏悠闲，大约需要2-3小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从“上城门”进入老城，感受中世纪入口氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  漫步主街“旧城街”，欣赏两旁色彩斑斓的 historic 房屋。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  抵达中心圣马丁广场，参观圣马丁教堂和塔楼基座。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  登上圣马丁塔楼，360度俯瞰老城屋顶、博登湖和阿尔卑斯山。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  沿着残留的古城墙路径散步，寻找眺望博登湖的隐秘角落。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  从“下城门”附近的小巷下山，回到湖畔现代城区。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城街道多为鹅卵石坡道，建议穿舒适的平底鞋。城区不大，无需特意导航，随意探索小巷更有趣。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **圣马丁塔楼观景台**：最佳拍摄时间为晴朗的下午，阳光柔和。向西拍摄，可将老城的红瓦屋顶、博登湖的湛蓝水面以及远处的阿尔卑斯山一同纳入镜头，层次感极佳。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **旧城街中段**：清晨或傍晚时分，游人稀少，阳光斜射在暖黄色的墙壁上。利用街道的纵深感，拍摄两侧彩色房屋和鹅卵石路面，充满宁静的生活气息。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **古城墙观景点**：沿城墙散步时，有几个缺口可以无遮挡地看到博登湖。以湖面和远山为背景，拍摄人物或单纯风景，画面开阔纯净。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">塔楼内部楼梯狭窄且光线较暗，拍摄内部结构需注意安全和高感光度设置。尊重当地居民隐私，避免对着住户窗户长时间拍摄。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **奢华湖景之选**：入住布雷根茨湖畔的五星级酒店，如Seehotel am Kaiserstrand，坐拥无敌湖景，步行至老城约15分钟。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **老城特色民宿**：选择老城内的家庭式公寓或精品旅馆，如位于老城中心的Gästehaus am Martinsplatz，沉浸于中世纪氛围中。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **经济便捷之选**：住在布雷根茨火车站附近的现代酒店，如Hotel ibis Bregenz，交通便利，性价比高，上山步行即可。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **文艺设计酒店**：选择位于文化区、设计感强的酒店，如Hotel Schwarzler，靠近艺术馆和剧院，风格独特。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">夏季艺术节期间（7-8月）房源紧张且价格高昂，需提前数月预订。选择老城住宿需注意部分建筑无电梯，携带大件行李可能不便。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">布雷根茨老城是一座需要你用心去“走”和“感受”的小城。它没有喧嚣的酒吧和纪念品商店，它的魅力在于那份沉淀了数百年的宁静与从容。当你在塔楼上看着夕阳把湖面和老城的屋顶染成金色，你会明白，有些地方的美，不在于多么惊心动魄，而在于它能让你瞬间平静下来，仿佛回到了时光的某个温柔褶皱里。如果你也爱这种低调的、生活着的古老气息，这里绝对值得你为它停留半天。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="公共区域全天开放。城内各博物馆、教堂等具体景点开放时间各异，通常为周二至周日 10:00-17:00。" />
                <InfoRow icon="🎫" label="门票" value="进入老城区域免费。参观圣马丁塔楼（Martinsturm）等独立景点需购票，成人票约5欧元。" />
                <InfoRow icon="📍" label="地址" value="Alstadt, 6900 Bregenz, Austria" />
                <InfoRow icon="🚌" label="交通" value="从最近的腓特烈港机场（德国）出发，乘坐巴士或出租车约30分钟可抵达布雷根茨火车站，再步行10分钟上山即到老城。从苏黎世机场出发，乘火车约2小时直达布雷根茨火车站。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
