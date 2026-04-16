import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '托马尔骑士团修道院 Convent of Christ in Tomar｜圣殿骑士团的秘密总部与建筑史诗 - 最佳欧洲景点',
  description: '当你第一眼看到托马尔骑士团修道院时，绝对会被它那种混合了堡垒、教堂和宫殿的复杂气质震撼到。它不像普通的修道院那样宁静出世，反而像一座从山岩上生长出来的巨大石制迷宫，充满了力量和神秘感。走进里面，最让人挪不开眼的就是那个“曼努埃尔窗”——华丽到夸张的石雕窗框，缠绕着缆绳、贝壳、珊瑚，仿佛把大航海时代的...',
}

export default function ConventOfChristTomarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '托马尔骑士团修道院', href: '/attractions/convent-of-christ-tomar' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">托马尔骑士团修道院・Convent of Christ in Tomar・葡萄牙・托马尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            当你第一眼看到托马尔骑士团修道院时，绝对会被它那种混合了堡垒、教堂和宫殿的复杂气质震撼到。它不像普通的修道院那样宁静出世，反而像一座从山岩上生长出来的巨大石制迷宫，充满了力量和神秘感。走进里面，最让人挪不开眼的就是那个“曼努埃尔窗”——华丽到夸张的石雕窗框，缠绕着缆绳、贝壳、珊瑚，仿佛把大航海时代的所有冒险和财富都凝固在了这一扇窗户上。穿梭在回廊之间，你能同时感受到圣殿骑士的军事严谨和后来修道院的宁静灵性，这种时空交错的感觉特别奇妙。站在城堡的城墙上俯瞰整个托马尔红屋顶小镇，那一刻，你仿佛能触摸到葡萄牙黄金时代的心跳。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">当你第一眼看到托马尔骑士团修道院时，绝对会被它那种混合了堡垒、教堂和宫殿的复杂气质震撼到。它不像普通的修道院那样宁静出世，反而像一座从山岩上生长出来的巨大石制迷宫，充满了力量和神秘感。走进里面，最让人挪不开眼的就是那个“曼努埃尔窗”——华丽到夸张的石雕窗框，缠绕着缆绳、贝壳、珊瑚，仿佛把大航海时代的所有冒险和财富都凝固在了这一扇窗户上。穿梭在回廊之间，你能同时感受到圣殿骑士的军事严谨和后来修道院的宁静灵性，这种时空交错的感觉特别奇妙。站在城堡的城墙上俯瞰整个托马尔红屋顶小镇，那一刻，你仿佛能触摸到葡萄牙黄金时代的心跳。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="托马尔骑士团修道院" />
                <InfoRow label="英文名称" value="Convent of Christ in Tomar" />
                <InfoRow label="正式名称" value="Convent of Christ in Tomar" />
                <InfoRow label="国家" value="葡萄牙" />
                <InfoRow label="城市" value="托马尔" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="夏季（4月至10月）：09:00 - 18:30；冬季（11月至3月）：09:00 - 17:30。最后入场时间为关闭前30分钟。每周一闭馆。" />
              <InfoRow label="门票价格" value="成人票：6欧元；65岁以上老人及学生票：3欧元；12岁以下儿童免费。持有里斯本卡或葡萄牙文化遗产联票可享受折扣。" />
              <InfoRow label="地址" value="Igreja do Castelo Templário, 2300-000 Tomar, Portugal" />
              <InfoRow label="交通方式" value="从里斯本机场出发，自驾沿A1和A23高速公路前往，车程约1.5小时。乘坐火车从里斯本东方车站到托马尔站，车程约2小时，出站后步行约20分钟或乘坐出租车5分钟即可抵达山上的修道院。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">这座修道院的故事，得从12世纪末说起，简直就是一部葡萄牙的“权力的游戏”。当时，葡萄牙的第一位国王阿方索·恩里克斯，为了在收复失地运动中巩固疆土，把托马尔这片土地赐给了神秘的圣殿骑士团。骑士们就在这里建立了最初的城堡和修道院，作为他们的总部和军事要塞。你可以想象，那些身披白袍绣着红字的骑士们，在这里策划行动，守护着通往南方的要道。到了14世纪，圣殿骑士团被解散，但在葡萄牙，它摇身一变成了“基督骑士团”，继续由王室支持。真正的建筑高潮是在15世纪末到16世纪，也就是曼努埃尔一世国王的时期。这位国王正享受着达伽马开辟印度航线的巨大荣耀和财富，于是他把这种海洋帝国的雄心，全部倾注到了修道院的扩建中。那个奢华的“曼努埃尔窗”就是那个时代的宣言，它不再是单纯的宗教装饰，而是充满了航海元素的国家广告牌。随后的岁月里，修道院又增加了文艺复兴风格的华丽回廊，比如著名的“菲力佩回廊”，让这座建筑变成了一个跨越哥特、曼努埃尔和文艺复兴风格的活化石。1983年，它被列入世界文化遗产，当你走在里面，真的就像在翻阅一本立体的葡萄牙史书。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览建议从主入口（靠近圆形教堂处）开始，按照从早期军事建筑到后期修道院建筑的时空顺序进行。全程参观大约需要2-3小时。路线终点通常设在最高的主回廊，那里可以俯瞰全景。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>修道院内部结构像迷宫，建议在入口处拿一份免费地图。部分通道和旋转楼梯较为狭窄昏暗，参观时请注意脚下安全。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从主入口进入，首先参观核心的骑士团圆形教堂，感受圣殿骑士最初的礼拜空间。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  探索城堡城墙和防御工事，沿着城墙走一段，想象骑士时代的守卫场景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  进入曼努埃尔一世时期增建的主教堂中殿，重点欣赏震撼的“曼努埃尔窗”。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  穿梭于一系列美丽的回廊（如墓地回廊、洗衣房回廊、菲力佩回廊），体验建筑的演变。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  登上菲力佩回廊的顶层，这里是俯瞰整个修道院建筑群和托马尔城的绝佳观景台。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  曼努埃尔窗前</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为上午，阳光能照亮华丽的石雕。正面平拍，能完美捕捉其繁复的航海装饰细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  菲力佩回廊顶层露台</h4>
                  <p className="text-sm text-gray-700">日落前半小时最佳，光线柔和。用广角镜头拍摄，可将层层叠叠的回廊屋顶、教堂和远处小镇一同纳入画面，层次感极强。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  城堡外墙下</h4>
                  <p className="text-sm text-gray-700">正午时分阳光直射，能突出岩石堡垒的粗犷质感。从较低角度仰拍，可以凸显修道院依山而建的雄伟气势。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  “墓地回廊”中心花园</h4>
                  <p className="text-sm text-gray-700">晴朗的白天，绿植与古老的石拱廊形成鲜明对比。站在回廊一角对称构图，能拍出宁静而富有几何美感的画面。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 教堂内部和部分回廊禁止使用闪光灯和三脚架。拍摄“曼努埃尔窗”时，注意避免正午的强烈顶光造成阴影过重。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端历史体验</h4>
                  <p className="text-sm text-blue-800">入住托马尔市中心的托马尔城堡酒店，由历史建筑改建，距离修道院仅几步之遥，沉浸感十足。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中档舒适之选</h4>
                  <p className="text-sm text-green-800">选择托马尔卢斯酒店，位于小镇中心，交通便利，性价比高，方便探索小镇和前往修道院。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济实用</h4>
                  <p className="text-sm text-yellow-800">预订托马尔火车站附近的民宿或公寓，价格实惠，乘坐火车前来的游客尤为方便。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色庄园住宿</h4>
                  <p className="text-sm text-purple-800">考虑修道院周边乡村地区的农庄客栈，享受宁静的田园风光，需自驾前往。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旅游旺季（特别是夏季周末）建议提前预订。住在托马尔老城区，晚上可以悠闲地散步，感受小镇的宁静氛围。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">托马尔骑士团修道院远不止是一座宗教建筑，它是一首用石头写成的葡萄牙史诗，从骑士的剑与信仰，到航海家的帆与梦想，层层叠叠地展现在你眼前。在这里，你能真切地感受到历史不是书本上的文字，而是可以触摸的墙壁、可以仰望的窗棂和可以漫步的回廊。离开时，那份混合了神圣、权力与艺术辉煌的复杂气息，会长久地留在记忆里，让人不禁回味这个国家曾有的雄心与荣光。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
