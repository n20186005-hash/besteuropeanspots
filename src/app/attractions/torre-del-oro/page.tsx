import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞维利亚黄金塔 Torre del Oro｜瓜达尔基维尔河畔的黄金守望者 - 最佳欧洲景点',
  description: '嘿，你知道吗？我第一次见到黄金塔时，太阳正把它照得金灿灿的，真的就像名字一样，仿佛一座用金子砌成的塔楼立在瓜达尔基维尔河边。它没有大教堂那么宏伟，但那种沧桑又精致的美特别抓人。走近了看，塔身是十二边形的，很特别，据说以前外墙上真的贴过金砖，用来反射阳光作为航标。现在里面是个小小的航海博物馆，爬上去的...',
}

export default function TorreDelOroPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '塞维利亚黄金塔', href: '/attractions/torre-del-oro' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">塞维利亚黄金塔・Torre del Oro・西班牙・塞维利亚</h1>
          <p className="text-lg text-gray-600 mb-6">
            嘿，你知道吗？我第一次见到黄金塔时，太阳正把它照得金灿灿的，真的就像名字一样，仿佛一座用金子砌成的塔楼立在瓜达尔基维尔河边。它没有大教堂那么宏伟，但那种沧桑又精致的美特别抓人。走近了看，塔身是十二边形的，很特别，据说以前外墙上真的贴过金砖，用来反射阳光作为航标。现在里面是个小小的航海博物馆，爬上去的旋转楼梯很窄，但当你站在塔顶，看着河水缓缓流过，对岸的特里亚纳区和远处的斗牛场尽收眼底，那一刻你会觉得，塞维利亚几百年的故事，都在这静静的河风里了。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，你知道吗？我第一次见到黄金塔时，太阳正把它照得金灿灿的，真的就像名字一样，仿佛一座用金子砌成的塔楼立在瓜达尔基维尔河边。它没有大教堂那么宏伟，但那种沧桑又精致的美特别抓人。走近了看，塔身是十二边形的，很特别，据说以前外墙上真的贴过金砖，用来反射阳光作为航标。现在里面是个小小的航海博物馆，爬上去的旋转楼梯很窄，但当你站在塔顶，看着河水缓缓流过，对岸的特里亚纳区和远处的斗牛场尽收眼底，那一刻你会觉得，塞维利亚几百年的故事，都在这静静的河风里了。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="塞维利亚黄金塔" />
                <InfoRow label="英文名称" value="Torre del Oro" />
                <InfoRow label="正式名称" value="Torre del Oro" />
                <InfoRow label="国家" value="西班牙" />
                <InfoRow label="城市" value="塞维利亚" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="周一至周五：9:30 - 18:45
周六至周日：10:30 - 18:45
（最后入场时间为闭馆前30分钟）" />
              <InfoRow label="门票价格" value="普通票：3欧元
优惠票（学生、65岁以上老人）：1.5欧元
周一免费入场（需提前预约）
6岁以下儿童免费" />
              <InfoRow label="地址" value="Paseo de Cristóbal Colón, s/n, 41001 Sevilla, Spain" />
              <InfoRow label="交通方式" value="从塞维利亚圣胡斯塔火车站出发，步行约20分钟即可到达。或乘坐公交车C5、C4、41路至“Torre del Oro”站下车，车站就在塔楼对面。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">黄金塔的故事要从13世纪说起。1220年，摩尔人统治者为了加强塞维利亚的防御，在瓜达尔基维尔河边建造了这座塔楼，它最初是城墙链条防御体系的一部分，通过一条巨大的铁链与河对岸的另一座塔楼相连，可以在战时封锁河道，想想就觉得那场面很壮观。它的名字“黄金”由来很有意思，一种流传最广的说法是，塔身的外墙曾经覆盖着金色的瓷砖，在阳光下闪闪发光；另一种说法则更“实在”，说是因为塔里曾经存放着从美洲殖民地运来的黄金珍宝。哥伦布发现新大陆后，塞维利亚成了西班牙通往美洲财富的门户，这座塔很可能亲眼见证过一艘艘满载黄金白银的船只归来，这给它蒙上了一层传奇色彩。不过，历经沧桑，它在18世纪的里斯本大地震中受损严重，后来被修复。如今，它不再是军事要塞，而是变成了一个宁静的航海博物馆，里面陈列着古老的航海图、模型船和一些海事文物，安静地讲述着它与这条河、与大海的往事。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览从塔楼入口开始，先参观底层的航海博物馆展厅，然后沿着狭窄的旋转楼梯逐层向上，最终抵达塔顶观景台。全程游览时间约1-1.5小时，属于轻松紧凑的行程。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>楼梯非常狭窄且光线较暗，上下楼时请小心，建议穿舒适的平底鞋。观景台空间有限，人多时可能需要耐心等待拍照位置。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  入口购票，进入底层海事博物馆展厅。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  观看古代航海图、船舶模型和历史文件。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  开始攀登古老的旋转石阶楼梯。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  在中层平台稍作停留，从窗口眺望河景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  登上顶层露天观景台，360度环视塞维利亚。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  沿原路下楼，在河边步道回望黄金塔全景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  塔对岸的河边步道</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或日落时分，阳光为塔身镀上金边。从河对岸拍摄，可以将黄金塔与它在水中的倒影、以及河上的船只一同纳入镜头，画面富有层次感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  塔顶观景台</h4>
                  <p className="text-sm text-gray-700">最佳时间为晴朗的白天。以瓜达尔基维尔河为前景，拍摄对岸的特里亚纳区和圣特尔莫桥，构图开阔，能体现塞维利亚的水城风貌。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  塔楼基座近景</h4>
                  <p className="text-sm text-gray-700">利用上午的侧光，近距离仰拍塔身的十二边形结构和砖石细节，突出其建筑的历史质感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 塔内博物馆展区通常禁止使用闪光灯。在观景台拍摄时，请注意保管好手机和相机，防止掉落。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  圣十字区历史酒店</h4>
                  <p className="text-sm text-blue-800">预算较高，住在迷宫般的古老街区，步行至黄金塔约10-15分钟，体验最地道的安达卢西亚风情。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  河边现代公寓</h4>
                  <p className="text-sm text-green-800">预算中等，选择瓜达尔基维尔河沿岸的公寓，很多房间阳台可直接欣赏黄金塔夜景，性价比高。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特里亚纳区特色民宿</h4>
                  <p className="text-sm text-yellow-800">预算灵活，住在河对岸的艺术区，晚上在本地小酒馆用餐后，散步过桥就能看到灯光下的金塔，视角独特。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">塞维利亚老城区街道多为石板路，拖行李箱可能不便，选择住宿时可以考虑这一点。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">黄金塔就像一位沉默的河畔老者，没有过多的言语，却承载了塞维利亚从摩尔时代到航海黄金时代的全部记忆。它不如大教堂震撼，但那份矗立在悠悠河水旁的宁静与沧桑，更能让人慢下来，触摸到这座城市温柔的历史脉搏。来塞维利亚，别忘了去跟这位“黄金守望者”打个招呼。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
