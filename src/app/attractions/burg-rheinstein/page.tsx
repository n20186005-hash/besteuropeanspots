import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱茵施泰因城堡 Burg Rheinstein｜坐拥莱茵河谷全景的中世纪浪漫城堡 - 最佳欧洲景点',
  description: '想象一下，你乘着莱茵河的游船，两岸是连绵的葡萄园和童话般的小镇，然后一座尖塔耸立、仿佛从岩石中生长出来的城堡突然闯入视线——那就是莱茵施泰因城堡给你的第一眼震撼。爬上一小段坡路走近它，那种混合着石头沧桑感和浪漫童话气息的感觉特别奇妙。它不是那种庞大到让人敬畏的堡垒，反而更像一个精致又坚固的“家”。走...',
}

export default function BurgRheinsteinPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: '特雷希廷斯豪森', href: '/destinations/germany' },
            { label: '莱茵施泰因城堡', href: '/attractions/burg-rheinstein' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">莱茵施泰因城堡・Burg Rheinstein・德国・特雷希廷斯豪森</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你乘着莱茵河的游船，两岸是连绵的葡萄园和童话般的小镇，然后一座尖塔耸立、仿佛从岩石中生长出来的城堡突然闯入视线——那就是莱茵施泰因城堡给你的第一眼震撼。爬上一小段坡路走近它，那种混合着石头沧桑感和浪漫童话气息的感觉特别奇妙。它不是那种庞大到让人敬畏的堡垒，反而更像一个精致又坚固的“家”。走进庭院，瞬间就被宁静包围了，耳边只有风声和鸟鸣，仿佛时间都慢了下来。站在城堡的露台上，脚下是蜿蜒如蓝丝带的莱茵河，对岸是绿意盎然的山丘，那种开阔的、油画般的景色，真的会让你忍不住“哇”出声来。这里没有太多喧嚣的游客，你可以慢慢探索每一个角落，触摸冰凉的古老石墙，感觉就像闯进了一个被妥善保存的中世纪梦境。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你乘着莱茵河的游船，两岸是连绵的葡萄园和童话般的小镇，然后一座尖塔耸立、仿佛从岩石中生长出来的城堡突然闯入视线——那就是莱茵施泰因城堡给你的第一眼震撼。爬上一小段坡路走近它，那种混合着石头沧桑感和浪漫童话气息的感觉特别奇妙。它不是那种庞大到让人敬畏的堡垒，反而更像一个精致又坚固的“家”。走进庭院，瞬间就被宁静包围了，耳边只有风声和鸟鸣，仿佛时间都慢了下来。站在城堡的露台上，脚下是蜿蜒如蓝丝带的莱茵河，对岸是绿意盎然的山丘，那种开阔的、油画般的景色，真的会让你忍不住“哇”出声来。这里没有太多喧嚣的游客，你可以慢慢探索每一个角落，触摸冰凉的古老石墙，感觉就像闯进了一个被妥善保存的中世纪梦境。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="莱茵施泰因城堡" />
                <InfoRow label="英文名称" value="Burg Rheinstein" />
                <InfoRow label="正式名称" value="Burg Rheinstein" />
                <InfoRow label="国家" value="德国" />
                <InfoRow label="城市" value="特雷希廷斯豪森" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="3月至10月：每日 9:30 - 18:00；11月至2月：周五至周日 10:00 - 17:00（具体日期可能变动，建议行前官网确认）。" />
              <InfoRow label="门票价格" value="成人票：7欧元；儿童票（6-14岁）：4欧元；家庭票（2成人+最多3名儿童）：18欧元。" />
              <InfoRow label="地址" value="Burg Rheinstein, 55413 Trechtingshausen, Germany" />
              <InfoRow label="交通方式" value="从法兰克福机场出发，乘坐火车至宾根主火车站（约1小时），再转乘莱茵河游船至特雷希廷斯豪森码头（约20分钟），下船后步行上山约15-20分钟即可抵达。也可从宾根火车站搭乘出租车，约15分钟车程。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">莱茵施泰因城堡的故事始于13世纪初，大约在1213年到1215年间，它由美因茨大主教兴建，最初的名字是“Vogtsburg”，主要功能是征收莱茵河上的通行税，是个不折不扣的“收费站”兼防御要塞。在接下来的几百年里，它见证了无数的纷争，特别是在14世纪，它被转手给了普法尔茨伯爵，成了莱茵河畔一串“强盗骑士”城堡中的一员，你懂的，就是那种收“过路费”不太讲道理的领主。不过它的军事辉煌没持续太久，17世纪时在战争中被部分摧毁，然后就慢慢荒废了，变成了一个长满藤蔓的浪漫废墟，静静俯瞰莱茵河。</p>
              <p className="text-gray-700 leading-relaxed mb-4">转机出现在19世纪，那是个迷恋中世纪浪漫主义的时代。1825年，普鲁士的弗里德里希·威廉亲王（后来的普鲁士国王弗里德里希·威廉四世的兄弟）一眼看中了这片废墟，把它买了下来。他可不是要重建军事堡垒，而是想打造一个属于自己的、充满童话色彩的“骑士之梦”。于是，在著名建筑师克劳泽的主持下，城堡被精心修复和重建，融入了大量新哥特式的浪漫元素，比如那些漂亮的尖顶窗和装饰性的城垛。它成了莱茵河上第一座被系统修复的中世纪城堡，也开启了整个莱茵河谷的“城堡修复热”。走在里面，你能感觉到这种奇妙的混合：厚重的中世纪石墙基底，加上19世纪浪漫主义者的华丽想象，让它既有历史的筋骨，又有梦幻的血肉。直到今天，它依然由私人家族精心维护着，这份跨越几个世纪的珍爱，让它的每一块石头都透着温度。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览路线从城堡入口的售票处开始，建议预留1.5-2小时。主要动线是顺时针参观：先进入主体建筑参观内部房间和博物馆，然后登上主塔楼观景，接着参观小教堂，最后在花园和露台漫步欣赏河景，终点回到入口庭院。路线清晰，基本不会走回头路。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>城堡内部楼梯较为狭窄陡峭，登塔时请务必注意脚下，建议穿着舒适的平底鞋。部分房间空间不大，客流高峰时可能需要稍作等待。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从主入口进入，参观骑士大厅，感受中世纪宴会氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  上楼参观曾经的起居室和卧室，现在陈列着古董家具和武器。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  攀爬狭窄的螺旋楼梯登上主塔楼，360度俯瞰莱茵河谷。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  参观位于庭院一侧的精致小教堂，内部彩绘玻璃很美。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  漫步至后方的露台花园，这里是拍摄莱茵河弯道的绝佳位置。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  沿着城墙步道走回入口庭院，从不同角度欣赏城堡建筑。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  主塔楼顶端</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴朗的下午，阳光柔和。从塔楼垛口向外拍摄，可以将蜿蜒的莱茵河、对岸的山丘和葡萄园一同纳入镜头，画面层次感极强。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  城堡露台花园</h4>
                  <p className="text-sm text-gray-700">清晨或黄昏时分光线最佳。以城堡的石墙和尖塔为前景，莱茵河为背景，能拍出非常经典的明信片角度。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  通往城堡的上坡小径拐角处</h4>
                  <p className="text-sm text-gray-700">上午顺光。从这个角度仰拍，城堡仿佛巍然屹立于岩石之上，能充分展现其险峻和雄伟的气势。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  内部骑士大厅的彩窗下</h4>
                  <p className="text-sm text-gray-700">利用室内自然光。拍摄彩绘玻璃投射在地面或墙壁上的斑斓光影，氛围感十足。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 使用无人机拍摄需格外谨慎，最好事先咨询城堡管理方，因为周边是航道和自然保护区。室内展览区域通常禁止使用闪光灯。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端历史体验</h4>
                  <p className="text-sm text-blue-800">入住宾根或吕德斯海姆的莱茵河畔历史酒店，有些酒店本身由古老建筑改建，能享受河景与高品质服务。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  温馨家庭旅馆</h4>
                  <p className="text-sm text-green-800">特雷希廷斯豪森本地或周边小镇有许多家庭经营的“民宿”（Pension），价格亲民，环境安静，主人通常很热情。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  便捷现代酒店</h4>
                  <p className="text-sm text-yellow-800">选择宾根火车站附近的现代商务酒店，交通和餐饮选择最多，适合作为探索莱茵河谷的基地。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  独特城堡住宿</h4>
                  <p className="text-sm text-purple-800">莱茵河谷有几座城堡提供住宿，虽然价格不菲，但能体验一夜“城堡主”的感觉，需提前很久预订。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季和葡萄酒节期间河谷住宿非常紧张，务必提前预订。住在小镇上，晚上散步到河边，看对岸城堡亮起灯光，是特别美妙的体验。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">莱茵施泰因城堡最打动我的，是它那种恰到好处的“亲密感”。它没有拒人千里的冰冷，更像一个被时光打磨得温润的古老家园。在这里，你能触摸到历史的粗粝，也能感受到19世纪浪漫主义者为它注入的诗意灵魂。当你在露台上吹着风，看着莱茵河永不疲倦地流淌时，会真切地觉得，有些美好，真的值得跨越山海来相遇。这不仅仅是一座城堡，更是一首刻在岩石上的、关于莱茵河的立体诗篇。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
