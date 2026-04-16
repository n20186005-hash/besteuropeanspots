import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '梅茨老城 Metz Old Town｜漫步在“黄金之城”的鹅卵石街道，感受法德交融的独特魅力 - 最佳欧洲景点',
  description: '一脚踏进梅茨老城，就像掉进了一个时光琥珀。脚下是咯吱作响的古老鹅卵石路，两旁是蜂蜜色砂岩砌成的房子，在阳光下泛着温暖的金光，难怪这里被称为“黄金之城”。空气里飘着刚出炉的面包香和咖啡香，混着远处圣艾蒂安大教堂那哥特式尖塔带来的庄严感，特别奇妙。老城被摩泽尔河温柔地环抱着，你可以沿着河散步，看天鹅游过...',
}

export default function MetzOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '梅茨老城', href: '/attractions/metz-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">梅茨老城・Metz Old Town・法国・梅茨</h1>
          <p className="text-lg text-gray-600 mb-6">
            一脚踏进梅茨老城，就像掉进了一个时光琥珀。脚下是咯吱作响的古老鹅卵石路，两旁是蜂蜜色砂岩砌成的房子，在阳光下泛着温暖的金光，难怪这里被称为“黄金之城”。空气里飘着刚出炉的面包香和咖啡香，混着远处圣艾蒂安大教堂那哥特式尖塔带来的庄严感，特别奇妙。老城被摩泽尔河温柔地环抱着，你可以沿着河散步，看天鹅游过，或者随便钻进一条小巷，发现一个满是鲜花的静谧庭院。这里既有法国的浪漫随性，又因历史上属于德意志而带有一丝严谨规整，两种气质碰撞出独一无二的氛围，让人忍不住想慢慢逛，细细品。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">一脚踏进梅茨老城，就像掉进了一个时光琥珀。脚下是咯吱作响的古老鹅卵石路，两旁是蜂蜜色砂岩砌成的房子，在阳光下泛着温暖的金光，难怪这里被称为“黄金之城”。空气里飘着刚出炉的面包香和咖啡香，混着远处圣艾蒂安大教堂那哥特式尖塔带来的庄严感，特别奇妙。老城被摩泽尔河温柔地环抱着，你可以沿着河散步，看天鹅游过，或者随便钻进一条小巷，发现一个满是鲜花的静谧庭院。这里既有法国的浪漫随性，又因历史上属于德意志而带有一丝严谨规整，两种气质碰撞出独一无二的氛围，让人忍不住想慢慢逛，细细品。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="梅茨老城" />
                <InfoRow label="英文名称" value="Metz Old Town" />
                <InfoRow label="正式名称" value="Metz Old Town" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="梅茨" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放；内部各景点开放时间各异，通常为9:00-18:00。" />
              <InfoRow label="门票价格" value="进入老城区免费；内部各景点单独收费（如圣艾蒂安大教堂登塔约5欧元，梅茨蓬皮杜中心门票约7-12欧元）。" />
              <InfoRow label="地址" value="Vieille Ville, 57000 Metz, France" />
              <InfoRow label="交通方式" value="从梅茨-南锡机场（ETZ）乘坐出租车约30分钟可达；从梅茨火车站（Gare de Metz-Ville）步行约10-15分钟即可进入老城核心区。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">梅茨老城的故事，简直就是一部欧洲历史的微缩剧本。它的起源可以追溯到罗马时代，当时就是一个重要的军事据点。到了中世纪，梅茨作为自由帝国城市繁荣起来，13世纪开始建造的圣艾蒂安大教堂就是证明，那惊人的彩绘玻璃窗（包括现代艺术家夏加尔的作品）诉说着当时的富庶与虔诚。老城那些坚固的城墙和德意志门，则提醒着我们它曾属于神圣罗马帝国的德意志部分。1871年至1918年，梅茨被并入德意志帝国，这段时间留下了许多德式风格的建筑，比如中央火车站，宏伟得像座宫殿。二战后，它重归法国。漫步老城，你能清晰看到这些历史层叠的痕迹：罗马的遗迹、中世纪的教堂、德意志时期的严谨建筑、以及法国回归后的现代活力（比如那座惊艳的梅茨蓬皮杜中心）。它不像一些古城活在过去的标本里，而是一直在呼吸、在生长，把每一次历史转折都化成了自己容貌的一部分。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从气势恢宏的梅茨火车站（本身就是一个景点）出发，步行约15分钟进入老城核心。以圣艾蒂安大教堂广场为圆心，探索辐射开来的迷人街巷、市场和河岸，全程步行游览约需3-4小时，轻松惬意。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城不大，非常适合用双脚探索，穿一双舒适的步行鞋是关键。手机地图足以导航，但更推荐随意迷失在蜿蜒的小巷里。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从梅茨火车站出发，欣赏其德式帝国建筑风格。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  穿过共和国大街，抵达圣艾蒂安大教堂，仰望其高耸的尖塔与内部彩窗。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  在大教堂广场周边小巷随意逛逛，寻找“黄金之城”的蜂蜜色老房子。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  步行至摩泽尔河畔，欣赏老城倒影与防御工事遗迹。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  参观现代艺术地标——梅茨蓬皮杜中心（位于老城边缘）。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在市政厅广场或河边的咖啡馆休息，结束行程。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  摩泽尔河上的新桥（Pont Neuf）</h4>
                  <p className="text-sm text-gray-700">清晨或黄昏，从桥侧拍摄圣艾蒂安大教堂的尖塔群与老城房屋在河中的倒影，画面宁静富有诗意。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  圣艾蒂安大教堂内部彩窗下</h4>
                  <p className="text-sm text-gray-700">晴朗的午后，阳光穿透巨大的彩绘玻璃窗，在地面和墙壁上投下绚丽光影，仰拍彩窗细节，色彩震撼。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  喜剧广场（Place de la Comédie）</h4>
                  <p className="text-sm text-gray-700">白天，以梅茨歌剧院（Opéra-Théâtre）的古典立面为背景，捕捉广场上悠闲的行人与咖啡馆氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  老城小巷深处</h4>
                  <p className="text-sm text-gray-700">上午阳光柔和时，寻找一条有鲜花装饰的蜂蜜色砂岩小巷，利用街道的纵深感构图，拍出温暖而富有生活气息的照片。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄教堂内部彩窗时请关闭闪光灯，尊重宗教场所的肃穆。河畔拍摄注意脚下安全。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  奢华之选</h4>
                  <p className="text-sm text-blue-800">入住老城中心或摩泽尔河畔的精品酒店，开窗即是历史景观。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适之选</h4>
                  <p className="text-sm text-green-800">选择火车站附近或共和国大街上的中档酒店，交通便利，步行至老城轻松。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济之选</h4>
                  <p className="text-sm text-yellow-800">老城外围或河对岸有不错的民宿和连锁酒店，性价比高。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色体验</h4>
                  <p className="text-sm text-purple-800">尝试住在由历史建筑改造的酒店或公寓，沉浸式感受古城氛围。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和圣诞市场期间）建议提前预订。住在老城内虽价格稍高，但能体验入夜后和清晨无游客的静谧时刻，非常值得。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">梅茨老城的美，不是那种咄咄逼人、让你必须打卡的惊艳，而是一种浸润身心的温和与丰富。它像一本摊开的立体历史书，每一页都由不同时代的砖石和故事写成。在这里，你可以同时感受到信仰的崇高、艺术的创新、市井的烟火和河水的温柔。离开时，带走的不仅是相机里的照片，更是那份漫步在金色砂岩间的从容心情，以及对于欧洲文化交融之美的深刻印象。这是一个会让你想再回来，慢慢生活几天的地方。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
