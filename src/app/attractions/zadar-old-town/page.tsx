import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '扎达尔老城 Zadar Old Town｜聆听海风琴的浪漫，漫步千年半岛古城 - 最佳欧洲景点',
  description: '嘿，如果你问我扎达尔最迷人的地方在哪，我会毫不犹豫地带你去老城。它就像一个伸进亚得里亚海的半岛，三面环海，被古老的城墙温柔地包裹着。走进去的第一感觉，就是时光在这里慢了下来。脚下是光滑发亮的白色石灰岩板路，被千年的脚步磨得温润。小巷窄得只能容两三人并肩，阳光从两侧蜜糖色石墙的缝隙里斜斜地切下来，空气...',
}

export default function ZadarOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '扎达尔老城', href: '/attractions/zadar-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">扎达尔老城・Zadar Old Town・克罗地亚・扎达尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            嘿，如果你问我扎达尔最迷人的地方在哪，我会毫不犹豫地带你去老城。它就像一个伸进亚得里亚海的半岛，三面环海，被古老的城墙温柔地包裹着。走进去的第一感觉，就是时光在这里慢了下来。脚下是光滑发亮的白色石灰岩板路，被千年的脚步磨得温润。小巷窄得只能容两三人并肩，阳光从两侧蜜糖色石墙的缝隙里斜斜地切下来，空气里混合着咖啡香和海风的咸味。最神奇的是，当你走到西端的海滨，一定要坐下来听听“海风琴”——那是埋在海堤下的秘密乐器，海浪拍打石阶，会奏出空灵又随机的音符，像大海在跟你低语。这里没有急匆匆的游客潮，只有当地人骑着自行车叮铃铃穿过，老太太在窗台浇花，那种悠闲又带着点文艺的调调，真的太治愈了。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你问我扎达尔最迷人的地方在哪，我会毫不犹豫地带你去老城。它就像一个伸进亚得里亚海的半岛，三面环海，被古老的城墙温柔地包裹着。走进去的第一感觉，就是时光在这里慢了下来。脚下是光滑发亮的白色石灰岩板路，被千年的脚步磨得温润。小巷窄得只能容两三人并肩，阳光从两侧蜜糖色石墙的缝隙里斜斜地切下来，空气里混合着咖啡香和海风的咸味。最神奇的是，当你走到西端的海滨，一定要坐下来听听“海风琴”——那是埋在海堤下的秘密乐器，海浪拍打石阶，会奏出空灵又随机的音符，像大海在跟你低语。这里没有急匆匆的游客潮，只有当地人骑着自行车叮铃铃穿过，老太太在窗台浇花，那种悠闲又带着点文艺的调调，真的太治愈了。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="扎达尔老城" />
                <InfoRow label="英文名称" value="Zadar Old Town" />
                <InfoRow label="正式名称" value="Zadar Old Town" />
                <InfoRow label="国家" value="克罗地亚" />
                <InfoRow label="城市" value="扎达尔" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放。内部各景点（如教堂、博物馆）开放时间各异，通常为夏季（4月-10月）9:00-18:00，冬季（11月-3月）时间缩短或部分关闭。" />
              <InfoRow label="门票价格" value="进入老城区域免费。内部各景点单独收费，如圣多纳图斯教堂门票约30库纳，考古博物馆约40库纳。" />
              <InfoRow label="地址" value="Zadar Old Town, 23000 Zadar, Croatia" />
              <InfoRow label="交通方式" value="从扎达尔机场（ZAD）乘坐机场巴士约20分钟可抵达老城边缘。从扎达尔长途汽车站步行约15分钟即可进入老城。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">扎达尔老城的故事，简直就是半部亚得里亚海东岸的编年史。早在公元前9世纪，伊利里亚人就在这里定居了。后来罗马人来了，把它变成了一个繁荣的殖民地，你看那些笔直的主街道格局，就是典型的罗马城市规划，直到今天“罗马广场”的遗迹还躺在那里晒太阳。到了中世纪，这里成了达尔马提亚地区的重镇，修建了我们现在看到的许多罗马式教堂，比如那个圆滚滚的圣多纳图斯教堂，它可是9世纪的“老古董”，粗犷又雄伟，站在它旁边能感受到那股子沧桑劲儿。随后威尼斯人统治了这里近四个世纪，留下了深刻的印记——坚固的城墙、城门（比如著名的陆地门），还有那种威尼斯式的优雅建筑风格。二战时老城遭受了严重轰炸，但克罗地亚人又精心地把它一砖一石修复起来。如今，它不再是军事要塞，而是一座活着的博物馆，古老与现代艺术（比如“向太阳致敬”的光电装置）在这里奇妙共存，你能触摸到的每一块石头，仿佛都在低声讲述着三千年的潮起潮落。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从老城东侧的“陆地门”进入，这是最具象征意义的起点。然后向西漫步，穿过主要广场和教堂，最终抵达海边的“海风琴”和“向太阳致敬”装置，全程步行游览约需3-4小时，轻松悠闲。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城不大，非常适合随意走走迷失方向，但手机地图能帮你定位主要景点。一定要穿一双非常舒服的鞋，因为石板路虽然美，但走久了还是挺考验脚板的。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从气势恢宏的威尼斯风格“陆地门”进入老城。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  漫步至古老的“罗马广场”遗址，感受千年历史。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观地标性建筑“圣多纳图斯教堂”及其钟楼。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  沿着“卡尔察街”主街向西，体验热闹的街巷氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  走到半岛西端，聆听神奇的“海风琴”。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在旁边欣赏夜晚会发光的“向太阳致敬”艺术装置。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  圣多纳图斯教堂前</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或黄昏，阳光为石墙镀上金色。从广场对面拍摄，将教堂的圆形主体与后方钟楼一同纳入画面，结构感极强。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  海风琴台阶</h4>
                  <p className="text-sm text-gray-700">日落时分最佳。坐在台阶上以大海和晚霞为背景拍摄侧影或背影，氛围感十足。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  陆地门入口</h4>
                  <p className="text-sm text-gray-700">上午顺光时拍摄。从护城河对岸拍摄城门全景，能捕捉到威尼斯飞狮雕塑的细节和城墙的倒影。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  窄巷光影</h4>
                  <p className="text-sm text-gray-700">正午阳光直射时。捕捉阳光在狭窄白石巷道上形成的光影分割线，拍出明暗对比的纵深感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄海风琴时请注意海浪，避免设备被打湿。尊重当地居民隐私，避免对着居民窗户近距离拍摄。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  老城内精品酒店</h4>
                  <p className="text-sm text-blue-800">位置极佳，开窗即是历史街景，但价格较高且停车不便。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  老城周边公寓</h4>
                  <p className="text-sm text-green-800">性价比之选，步行5-10分钟进入老城，通常设施齐全可做饭。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  博雷特区域酒店</h4>
                  <p className="text-sm text-yellow-800">位于老城对岸的新区，现代舒适，需乘渡轮或开车过桥进入老城，海景视野开阔。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旺季，务必提前预订。选择老城内住宿需确认是否提供停车方案，因为老城内部禁止外部车辆通行。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">扎达尔老城的美，不是那种咄咄逼人的壮观，而是一种细水长流的温柔。它把罗马的废墟、中世纪的教堂、威尼斯的城墙和现代的艺术装置，全都糅合在海风与阳光里。在这里，最好的旅行方式就是放下地图，任由双脚带你去发现下一个转角咖啡馆，或是另一段静谧的海岸。当你在海风琴边坐下，听着大海为你即兴演奏，看着落日把天空染成粉紫色，你会觉得，时光就该这样被浪费在美好的地方。这绝对是一个值得你为它停留两三天的诗意角落。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
