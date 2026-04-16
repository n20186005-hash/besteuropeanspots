import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施塔德老城 Stade Old Town｜漫步汉萨同盟的时光回廊，感受北德水城的童话魅力 - 最佳欧洲景点',
  description: '一脚踏进施塔德老城，时间仿佛瞬间慢了下来。这里没有大城市的喧嚣，只有彩色的桁架木屋歪歪扭扭地挤在鹅卵石小巷两旁，像极了从童话书里直接搬出来的场景。老城被施塔德水网温柔环绕，一座座小桥连接着街区，河边总停着几艘小船，安静得能听见水流声。我最爱在午后的阳光里，随便找家临河的咖啡馆坐下，看着尖顶的圣科斯马...',
}

export default function StadeOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '施塔德老城', href: '/attractions/stade-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">施塔德老城・Stade Old Town・德国・施塔德</h1>
          <p className="text-lg text-gray-600 mb-6">
            一脚踏进施塔德老城，时间仿佛瞬间慢了下来。这里没有大城市的喧嚣，只有彩色的桁架木屋歪歪扭扭地挤在鹅卵石小巷两旁，像极了从童话书里直接搬出来的场景。老城被施塔德水网温柔环绕，一座座小桥连接着街区，河边总停着几艘小船，安静得能听见水流声。我最爱在午后的阳光里，随便找家临河的咖啡馆坐下，看着尖顶的圣科斯马伊教堂倒映在水面，那份宁静和治愈感，是任何攻略都形容不出来的。空气中飘着咖啡香和刚出炉的“法兰克福蛋糕”的甜味，每一步都是风景，每一个转角都有惊喜。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">一脚踏进施塔德老城，时间仿佛瞬间慢了下来。这里没有大城市的喧嚣，只有彩色的桁架木屋歪歪扭扭地挤在鹅卵石小巷两旁，像极了从童话书里直接搬出来的场景。老城被施塔德水网温柔环绕，一座座小桥连接着街区，河边总停着几艘小船，安静得能听见水流声。我最爱在午后的阳光里，随便找家临河的咖啡馆坐下，看着尖顶的圣科斯马伊教堂倒映在水面，那份宁静和治愈感，是任何攻略都形容不出来的。空气中飘着咖啡香和刚出炉的“法兰克福蛋糕”的甜味，每一步都是风景，每一个转角都有惊喜。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="施塔德老城" />
                <InfoRow label="英文名称" value="Stade Old Town" />
                <InfoRow label="正式名称" value="Stade Old Town" />
                <InfoRow label="国家" value="德国" />
                <InfoRow label="城市" value="施塔德" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放；内部各博物馆及历史建筑开放时间不一，通常为周二至周日 10:00-17:00。" />
              <InfoRow label="门票价格" value="进入老城区域免费。参观单个博物馆或历史建筑门票约3-6欧元，联票更优惠。" />
              <InfoRow label="地址" value="Altstadt, 21682 Stade, Germany" />
              <InfoRow label="交通方式" value="从汉堡机场出发，乘坐S-Bahn（S5线）至汉堡主火车站，换乘区域火车（RE或RB）前往施塔德火车站，全程约1小时。从施塔德火车站步行10分钟即可到达老城中心。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">施塔德的故事，可以说是一部浓缩的北德汉萨同盟兴衰史。它的黄金时代大概要从13世纪算起，那时候它作为重要的汉萨同盟港口城市，靠着易北河支流的便利，把粮食、啤酒和布料生意做得风生水起。你现在看到的那些华丽的山墙和仓库，很多都是那个富裕年代的遗产。不过命运也挺爱开玩笑，17世纪时瑞典人来了，把这里变成了瑞典王国在德国的重要据点，留下了不少巴洛克风格的印记，比如市政厅那边就能看到。后来的大火和战争虽然让老城伤痕累累，但德国人那种“修旧如旧”的执着真的让人佩服。他们像拼图一样，一砖一瓦地把这些中世纪木筋屋复原，不是做成死气沉沉的博物馆，而是让咖啡馆、画廊和小店住进去，让历史真正活在了当下。走在街上，你能同时触摸到汉萨的厚重、瑞典的优雅和现代的生活气，这种感觉特别奇妙。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从老城西侧的地标——圣科斯马伊教堂开始，顺时针环绕老城核心区游览，重点感受河畔风光、集市广场与小巷魅力。全程步行，悠闲游览大约需要2-3小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城小巷如迷宫，但不用担心迷路，随心探索更有趣。建议穿舒适的平底鞋，鹅卵石路面对高跟鞋不太友好。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从宏伟的圣科斯马伊教堂钟楼开始，仰望其红砖建筑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  漫步到老市政厅和历史悠久的集市广场。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  穿过“糖果屋”等彩绘木筋房小巷，感受童话氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  沿着施塔德水网漫步，欣赏河边仓库与倒影。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  参观老海关大楼，了解港口历史。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在鱼市附近的咖啡馆结束行程，享受河景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.   Fischmarkt 鱼市桥头</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚，站在小桥上拍摄河道与两岸彩色木屋的倒影，画面宁静富有水城韵味。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.   圣科斯马伊教堂侧面小巷</h4>
                  <p className="text-sm text-gray-700">下午阳光斜射时，以教堂巨大的红砖墙体为背景，拍摄蜿蜒的鹅卵石街道和行人，构图极具纵深感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.   “糖果屋” (Kunsthaus) 前</h4>
                  <p className="text-sm text-gray-700">白天任何时候，近距离拍摄这栋外墙绘有精美童话图案的著名木筋屋，色彩鲜艳，充满童趣。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.   老海关大楼对岸</h4>
                  <p className="text-sm text-gray-700">日落时分，从河对岸拍摄老海关大楼及其在水中的完整倒影，古典建筑与自然光线结合。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄民居时请注意礼貌，避免打扰当地居民生活。雨天后的鹅卵石路面反光，能拍出更生动的照片。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.   老城内精品酒店</h4>
                  <p className="text-sm text-blue-800">入住修复的历史建筑木筋屋酒店，沉浸式体验中世纪氛围，价格中上。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.   施塔德水畔民宿</h4>
                  <p className="text-sm text-green-800">选择老城河边带小露台的公寓，享受私家的水城 views，适合家庭或情侣。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.   火车站附近商务酒店</h4>
                  <p className="text-sm text-yellow-800">性价比之选，交通便利，步行至老城约10分钟，适合预算有限的旅客。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.   城郊田园风旅馆</h4>
                  <p className="text-sm text-purple-800">如果自驾，可选择周边村庄安静舒适的旅馆，体验德国乡村风情。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和圣诞市场期间）老城内住宿非常紧俏，务必提前预订。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">施塔德老城就像一个被时光轻轻吻过的地方，它不张扬，却美得深入人心。在这里，历史不是课本上枯燥的文字，而是你指尖触碰到的木头纹理，是脚下磨光的鹅卵石，是空气中混合着的河水与咖啡的气息。如果你厌倦了标准化的旅行，想找一个能让自己心静下来、慢慢走、细细看的地方，那么施塔德老城绝对不会让你失望。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
