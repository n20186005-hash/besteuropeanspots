import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈默尔恩老城 Hameln Old Town｜走进彩绘山墙与捕鼠人传说的童话世界 - 最佳欧洲景点',
  description: '一脚踏进哈默尔恩老城，就像不小心翻开了童话书的一页。满眼都是糖果色的木桁架房屋，每一栋的立面都像精心绘制的插图，尖尖的山墙挤在一起，仿佛在窃窃私语。空气里飘着姜饼和咖啡的香味，耳边似乎能听到中世纪街道传来的马蹄声——当然，还有那个著名的“捕鼠人”笛声的传说。在这里散步，你不需要地图，只需要跟着彩绘的...',
}

export default function HamelnOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '哈默尔恩老城', href: '/attractions/hameln-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">哈默尔恩老城・Hameln Old Town・德国・哈默尔恩</h1>
          <p className="text-lg text-gray-600 mb-6">
            一脚踏进哈默尔恩老城，就像不小心翻开了童话书的一页。满眼都是糖果色的木桁架房屋，每一栋的立面都像精心绘制的插图，尖尖的山墙挤在一起，仿佛在窃窃私语。空气里飘着姜饼和咖啡的香味，耳边似乎能听到中世纪街道传来的马蹄声——当然，还有那个著名的“捕鼠人”笛声的传说。在这里散步，你不需要地图，只需要跟着彩绘的墙壁和鹅卵石小路走，每个转角都可能遇到一个讲述古老故事的雕塑或喷泉。整座老城就像一座露天博物馆，但比博物馆生动一百倍，因为它依然活着，面包房在烤面包，小酒馆里坐满了喝啤酒的人。那种感觉，特别像走进了一个被时光温柔保存下来的梦境。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">一脚踏进哈默尔恩老城，就像不小心翻开了童话书的一页。满眼都是糖果色的木桁架房屋，每一栋的立面都像精心绘制的插图，尖尖的山墙挤在一起，仿佛在窃窃私语。空气里飘着姜饼和咖啡的香味，耳边似乎能听到中世纪街道传来的马蹄声——当然，还有那个著名的“捕鼠人”笛声的传说。在这里散步，你不需要地图，只需要跟着彩绘的墙壁和鹅卵石小路走，每个转角都可能遇到一个讲述古老故事的雕塑或喷泉。整座老城就像一座露天博物馆，但比博物馆生动一百倍，因为它依然活着，面包房在烤面包，小酒馆里坐满了喝啤酒的人。那种感觉，特别像走进了一个被时光温柔保存下来的梦境。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="哈默尔恩老城" />
                <InfoRow label="英文名称" value="Hameln Old Town" />
                <InfoRow label="正式名称" value="Hameln Old Town" />
                <InfoRow label="国家" value="德国" />
                <InfoRow label="城市" value="哈默尔恩" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放。各博物馆、纪念品商店及导览服务时间各异，通常为周一至周五 10:00-17:00，周末 11:00-16:00。" />
              <InfoRow label="门票价格" value="进入老城区域免费。参加“捕鼠人”主题导览游约10-15欧元/人，参观个别博物馆需单独购票，约5-8欧元/人。" />
              <InfoRow label="地址" value="Osterstraße 1, 31785 Hameln, Germany" />
              <InfoRow label="交通方式" value="从汉诺威机场出发，乘坐S-Bahn（S5线）至汉诺威主火车站，转乘区域火车（RE或RB线）前往哈默尔恩站，全程约1.5小时。从哈默尔恩火车站步行至老城中心仅需10分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">哈默尔恩的故事，大概要从那个全世界小孩都听过的“花衣魔笛手”传说讲起。虽然传说的真实性已不可考（据说源于1284年确实有大量儿童从城中消失的事件），但它为这座城奠定了永恒的童话底色。抛开传说，哈默尔恩在历史上是威悉河上的重要贸易点，真正繁荣于文艺复兴时期。你现在看到的那些美到令人窒息、带有华丽山墙和精美雕刻的木桁架房屋，大多建于16至18世纪，那是哈默尔恩作为商人城镇的黄金时代。当时的富商们竞相建造最华丽的住宅，仿佛把财富都“写”在了房子的外墙上。二战期间，哈默尔恩非常幸运地躲过了大规模轰炸，这些珍贵的建筑才得以几乎原封不动地保存至今。走在街上，抚摸那些历经数百年依然色彩鲜艳的木梁，你会觉得历史并非遥不可及，它就凝固在这些砖木之间，随着每一个“捕鼠人”故事的讲述而一次次复活。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议从老城西侧的“婚礼之家”开始，这里是信息中心和经典地标，然后向东漫步主街Osterstraße，欣赏两侧最美建筑，最终抵达集市广场和圣博尼法斯教堂。全程步行缓慢游览，包括拍照和逛小店，约需2-3小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城不大，完全可以用脚步探索，穿一双舒适的鞋子很重要。可以留意铺路石上镶嵌的铜制小老鼠标志，它们会引导你走一条“捕鼠人之路”。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从“婚礼之家”开始，欣赏其华丽的文艺复兴立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  沿Osterstraße主街漫步，抬头看两侧色彩缤纷的山墙。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  在“捕鼠人之家”前寻找老鼠形状的金属标志和雕塑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  走到集市广场，看古老的市政厅和圣博尼法斯教堂。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  寻找小巷中的“禁舞之家”，听一听它的诡异传说。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在威悉河畔漫步，从另一个角度回望老城天际线。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  Osterstraße街道中段</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴朗的上午，阳光能照亮建筑立面。站在街道中央，用长焦镜头压缩空间，拍下彩色山墙层层叠叠的韵律感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  集市广场喷泉前</h4>
                  <p className="text-sm text-gray-700">下午时段，以文艺复兴风格的市政厅为背景，拍摄人物与“捕鼠人”主题喷泉的互动场景，故事感十足。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  威悉河对岸</h4>
                  <p className="text-sm text-gray-700">日落时分，过桥到河对岸，可以拍摄老城建筑群倒映在威悉河中的全景，尖顶和山墙的剪影非常迷人。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄木桁架房屋时，注意寻找有特色细节（如雕刻、铭文、特殊窗饰）的局部，比拍大全景更有味道。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  奢华之选</h4>
                  <p className="text-sm text-blue-800"> 住在老城广场旁的精品酒店，开窗即是历史景致。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中档优选</h4>
                  <p className="text-sm text-green-800"> 选择老城边缘或威悉河畔的家庭旅馆，安静且步行可达所有景点。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济实惠</h4>
                  <p className="text-sm text-yellow-800"> 火车站附近有现代连锁酒店，价格亲民，通勤方便。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色体验</h4>
                  <p className="text-sm text-purple-800"> 预订一栋经过修复的历史木桁架房屋内的公寓，做一晚“中世纪市民”。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季和周末是旅游旺季，建议提前预订。住在老城内虽然价格稍高，但能体验入夜后和清晨游客稀少时，古城独有的静谧魔法。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">哈默尔恩老城是一个会用色彩和故事拥抱你的地方。它不像那些宏伟到让人有距离感的大都市，而是小巧、精致、充满人情味。在这里，传说与历史交织，建筑本身就是叙事诗。离开时，你带走的不仅是照片，还有满脑子的彩色房子和那个关于承诺与代价的古老寓言的回响。它是一个提醒：有些童话，真的可以在现实世界里找到。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
