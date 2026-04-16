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

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布雷根茨老城・Bregenz Old Town・奥地利・布雷根茨</h1>
          <p className="text-lg text-gray-600 mb-6">
            爬上一段缓坡，瞬间就从博登湖畔的现代剧院区，跌进了一个铺满鹅卵石、墙壁刷成暖黄色的童话世界，这就是布雷根茨老城给我的第一印象。它不像那些挤满游客的大城市老城，这里安静得能听见自己的脚步声和远处教堂的钟响。老城盘踞在一座小山上，像个害羞的少女，从狭窄巷道的缝隙里，你能瞥见山下那片巨大的、蓝得像宝石的博登湖，那种“湖光山色尽在脚下”的感觉特别奇妙。空气里混合着咖啡香、老木头的气息，还有从湖边飘来的湿润水汽。随便走进一家家庭餐馆，点一份地道的福拉尔贝格州奶酪面，看着窗外历经数百年的彩色房屋，时间好像真的慢了下来。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">爬上一段缓坡，瞬间就从博登湖畔的现代剧院区，跌进了一个铺满鹅卵石、墙壁刷成暖黄色的童话世界，这就是布雷根茨老城给我的第一印象。它不像那些挤满游客的大城市老城，这里安静得能听见自己的脚步声和远处教堂的钟响。老城盘踞在一座小山上，像个害羞的少女，从狭窄巷道的缝隙里，你能瞥见山下那片巨大的、蓝得像宝石的博登湖，那种“湖光山色尽在脚下”的感觉特别奇妙。空气里混合着咖啡香、老木头的气息，还有从湖边飘来的湿润水汽。随便走进一家家庭餐馆，点一份地道的福拉尔贝格州奶酪面，看着窗外历经数百年的彩色房屋，时间好像真的慢了下来。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="布雷根茨老城" />
                <InfoRow label="英文名称" value="Bregenz Old Town" />
                <InfoRow label="正式名称" value="Bregenz Old Town" />
                <InfoRow label="国家" value="奥地利" />
                <InfoRow label="城市" value="布雷根茨" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放。城内各博物馆、教堂等具体景点开放时间各异，通常为周二至周日 10:00-17:00。" />
              <InfoRow label="门票价格" value="进入老城区域免费。参观圣马丁塔楼（Martinsturm）等独立景点需购票，成人票约5欧元。" />
              <InfoRow label="地址" value="Alstadt, 6900 Bregenz, Austria" />
              <InfoRow label="交通方式" value="从最近的腓特烈港机场（德国）出发，乘坐巴士或出租车约30分钟可抵达布雷根茨火车站，再步行10分钟上山即到老城。从苏黎世机场出发，乘火车约2小时直达布雷根茨火车站。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">布雷根茨的故事可以追溯到公元前1500年左右的凯尔特人定居点，但真正让它在历史上留下名字的是罗马人。公元5世纪罗马帝国衰落后，这里成了阿勒曼尼人的地盘。快进到中世纪，布雷根茨在13世纪获得了城市权，并修筑了城墙，老城的格局基本就是在那个时期定型的。你可以摸摸那些厚实的城墙基底，感觉能触碰到八百年前的石头温度。15世纪，它成为了哈布斯堡王朝的前哨，命运随之起伏。老城里最显眼的圣马丁塔楼，最初是罗马式教堂的钟楼，在16世纪末被改造成了现在我们看到的、戴着巨大洋葱帽的巴洛克模样，特别可爱，成了整座城市的地标。历史上，布雷根茨经历过几次大火和战争，但老城核心总是被顽强地重建和保存下来。二战后的重建更是精心，所以今天我们看到的不是破败的遗迹，而是一个活着的、充满生活气息的中世纪社区。走在街上，你会觉得历史不是教科书上的文字，而是你脚下光滑的石头和身边墙壁褪色的彩绘。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览建议从山下的火车站或湖畔剧院区开始，步行上山（约10-15分钟），以老城中心的圣马丁广场为起点和核心，环绕主要街道和城墙遗迹漫步，最后登上圣马丁塔楼俯瞰全景。全程步行游览，节奏悠闲，大约需要2-3小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城街道多为鹅卵石坡道，建议穿舒适的平底鞋。城区不大，无需特意导航，随意探索小巷更有趣。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从“上城门”进入老城，感受中世纪入口氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  漫步主街“旧城街”，欣赏两旁色彩斑斓的 historic 房屋。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  抵达中心圣马丁广场，参观圣马丁教堂和塔楼基座。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  登上圣马丁塔楼，360度俯瞰老城屋顶、博登湖和阿尔卑斯山。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  沿着残留的古城墙路径散步，寻找眺望博登湖的隐秘角落。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  从“下城门”附近的小巷下山，回到湖畔现代城区。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  圣马丁塔楼观景台</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴朗的下午，阳光柔和。向西拍摄，可将老城的红瓦屋顶、博登湖的湛蓝水面以及远处的阿尔卑斯山一同纳入镜头，层次感极佳。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  旧城街中段</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚时分，游人稀少，阳光斜射在暖黄色的墙壁上。利用街道的纵深感，拍摄两侧彩色房屋和鹅卵石路面，充满宁静的生活气息。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  古城墙观景点</h4>
                  <p className="text-sm text-gray-700">沿城墙散步时，有几个缺口可以无遮挡地看到博登湖。以湖面和远山为背景，拍摄人物或单纯风景，画面开阔纯净。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 塔楼内部楼梯狭窄且光线较暗，拍摄内部结构需注意安全和高感光度设置。尊重当地居民隐私，避免对着住户窗户长时间拍摄。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  奢华湖景之选</h4>
                  <p className="text-sm text-blue-800">入住布雷根茨湖畔的五星级酒店，如Seehotel am Kaiserstrand，坐拥无敌湖景，步行至老城约15分钟。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  老城特色民宿</h4>
                  <p className="text-sm text-green-800">选择老城内的家庭式公寓或精品旅馆，如位于老城中心的Gästehaus am Martinsplatz，沉浸于中世纪氛围中。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济便捷之选</h4>
                  <p className="text-sm text-yellow-800">住在布雷根茨火车站附近的现代酒店，如Hotel ibis Bregenz，交通便利，性价比高，上山步行即可。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  文艺设计酒店</h4>
                  <p className="text-sm text-purple-800">选择位于文化区、设计感强的酒店，如Hotel Schwarzler，靠近艺术馆和剧院，风格独特。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季艺术节期间（7-8月）房源紧张且价格高昂，需提前数月预订。选择老城住宿需注意部分建筑无电梯，携带大件行李可能不便。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">布雷根茨老城是一座需要你用心去“走”和“感受”的小城。它没有喧嚣的酒吧和纪念品商店，它的魅力在于那份沉淀了数百年的宁静与从容。当你在塔楼上看着夕阳把湖面和老城的屋顶染成金色，你会明白，有些地方的美，不在于多么惊心动魄，而在于它能让你瞬间平静下来，仿佛回到了时光的某个温柔褶皱里。如果你也爱这种低调的、生活着的古老气息，这里绝对值得你为它停留半天。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
