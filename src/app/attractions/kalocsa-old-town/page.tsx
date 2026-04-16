import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '考洛乔老城 Kalocsa Old Town｜匈牙利“辣椒之都”的彩色巴洛克风情 - 最佳欧洲景点',
  description: '走进考洛乔老城，就像一头扎进了一个色彩明快的童话世界。第一眼就会被街道两旁那些粉的、黄的、天蓝的巴洛克式房屋惊艳到，外墙干净得发亮，窗台上永远摆着盛开的鲜花，整个氛围慵懒又甜蜜。这里被称为匈牙利的“辣椒之都”，空气里仿佛都飘着一丝 paprika 的辛香。最让人着迷的是那份宁静，没有汹涌的人潮，只有...',
}

export default function KalocsaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '考洛乔老城', href: '/attractions/kalocsa-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">考洛乔老城・Kalocsa Old Town・匈牙利・考洛乔</h1>
          <p className="text-lg text-gray-600 mb-6">
            走进考洛乔老城，就像一头扎进了一个色彩明快的童话世界。第一眼就会被街道两旁那些粉的、黄的、天蓝的巴洛克式房屋惊艳到，外墙干净得发亮，窗台上永远摆着盛开的鲜花，整个氛围慵懒又甜蜜。这里被称为匈牙利的“辣椒之都”，空气里仿佛都飘着一丝 paprika 的辛香。最让人着迷的是那份宁静，没有汹涌的人潮，只有本地老爷爷在长椅上晒太阳，偶尔有马车“哒哒”地走过石板路。站在宏伟的圣玛丽升天大教堂前，那种宗教的庄严感和市井的生活气奇妙地融合在一起，让人觉得特别踏实、温暖。别忘了去逛逛那些卖手工刺绣和辣椒串的小店，那是考洛乔的灵魂所在。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">走进考洛乔老城，就像一头扎进了一个色彩明快的童话世界。第一眼就会被街道两旁那些粉的、黄的、天蓝的巴洛克式房屋惊艳到，外墙干净得发亮，窗台上永远摆着盛开的鲜花，整个氛围慵懒又甜蜜。这里被称为匈牙利的“辣椒之都”，空气里仿佛都飘着一丝 paprika 的辛香。最让人着迷的是那份宁静，没有汹涌的人潮，只有本地老爷爷在长椅上晒太阳，偶尔有马车“哒哒”地走过石板路。站在宏伟的圣玛丽升天大教堂前，那种宗教的庄严感和市井的生活气奇妙地融合在一起，让人觉得特别踏实、温暖。别忘了去逛逛那些卖手工刺绣和辣椒串的小店，那是考洛乔的灵魂所在。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="考洛乔老城" />
                <InfoRow label="英文名称" value="Kalocsa Old Town" />
                <InfoRow label="正式名称" value="Kalocsa Old Town" />
                <InfoRow label="国家" value="匈牙利" />
                <InfoRow label="城市" value="考洛乔" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城公共区域全天开放。内部主要景点（如大主教宫、大教堂）开放时间通常为周二至周日 10:00-18:00，周一关闭。" />
              <InfoRow label="门票价格" value="漫步老城街道免费。大主教宫门票约1500福林，大教堂免费进入但建议捐赠。" />
              <InfoRow label="地址" value="Kalocsa, Szent István király tér 1, 6300 Hungary" />
              <InfoRow label="交通方式" value="从布达佩斯出发，可乘坐火车或长途巴士前往考洛乔，车程约1.5-2小时。抵达考洛乔火车站后，老城中心区域步行即可到达，约10-15分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">考洛乔的历史可以追溯到公元1000年左右，匈牙利第一位国王圣伊什特万一世在这里建立了大主教区，让它一跃成为中世纪匈牙利最重要的宗教和文化中心之一，地位仅次于埃斯泰尔戈姆。你可以想象一下，几百年来，红衣主教们在这里运筹帷幄，影响着整个王国的精神世界。不过，老城也命运多舛，尤其是16世纪奥斯曼土耳其的入侵，几乎把这里夷为平地，那些辉煌的中世纪建筑大多没能留下来。现在我们看到的美丽模样，主要是18世纪重建后的成果。当时盛行巴洛克风格，于是考洛乔就在废墟上，用明快的色彩和优雅的线条获得了新生，少了些中世纪的沉重，多了份轻快的世俗美感。漫步其中，我总觉得能感受到一种顽强的生命力——无论经历多少战火，人们对美好生活的向往总能重新开花结果。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议游览时间2-3小时。路线以市中心的圣伊什特万广场为起点和核心，环绕大教堂和大主教宫区域，最后漫步至老城色彩斑斓的民居街道，感受本地生活气息。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城很小，完全不需要地图，随意走走就是最好的探索方式。记得穿一双舒适的平底鞋，石板路虽然漂亮但不太平整。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从圣伊什特万广场开始，仰望圣玛丽升天大教堂的双子塔楼。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  进入大教堂内部，欣赏华丽的巴洛克主祭坛和管风琴。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观毗邻的大主教宫，了解宗教历史与辣椒文化。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  漫步到主教宫花园，享受片刻宁静。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  穿梭于老城主街（如Kossuth Lajos utca），欣赏彩色房屋。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  逛一逛本地手工艺品店，买串辣椒做纪念。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  圣伊什特万广场望向大教堂</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或傍晚，阳光柔和。正面拍摄，利用广场的石板路做引导线，突出教堂建筑的宏伟与对称美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  大主教宫拱门下</h4>
                  <p className="text-sm text-gray-700">午后光线穿过拱门形成光影。从拱门内向外拍摄街道上的彩色房屋，形成漂亮的画框构图。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  Kossuth Lajos utca 街道中段</h4>
                  <p className="text-sm text-gray-700">晴天上午，阳光能充分照亮房屋立面。选择一段色彩对比强烈的房屋（如粉墙配蓝窗），低角度拍摄，让街道的纵深感与色彩一同延伸。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  本地辣椒店门前</h4>
                  <p className="text-sm text-gray-700">白天任何时间。近距离拍摄挂满门廊的鲜红辣椒串，色彩饱满，极具地方特色，是生动的纪实画面。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄民居时请保持礼貌，避免打扰住户的私人生活。辣椒节期间，可以捕捉到更多人物和活动的精彩瞬间。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  市中心精品酒店</h4>
                  <p className="text-sm text-blue-800">位于老城广场附近，由历史建筑改建，风格独特，出行极方便。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  家庭式公寓</h4>
                  <p className="text-sm text-green-800">分布在老城彩色民居中，能体验本地生活，性价比高。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  城郊温泉酒店</h4>
                  <p className="text-sm text-yellow-800">考洛乔以温泉闻名，稍远一点的温泉酒店适合想要放松的旅客。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  布达佩斯当日往返</h4>
                  <p className="text-sm text-purple-800">如果行程紧张，可从布达佩斯出发进行一日游。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">考洛乔住宿选择有限，若遇辣椒节等大型活动务必提前预订。住在老城内才能真正感受清晨无游客时的静谧之美。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">考洛乔老城就像一个被时光轻轻吻过的地方，它不张扬，却用色彩治愈人心。这里的故事写在每一面彩墙上，也串在每一挂红辣椒里。它不像那些顶级的旅游名城会让你感到震撼，却会用一种家常的、温暖的幸福感将你包围。如果你厌倦了拥挤，想找一个地方发发呆，看看书，顺便品尝匈牙利最地道的辣椒风味，那么这个小巧精致的彩色老城，绝对值得你为它专程停留一天。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
