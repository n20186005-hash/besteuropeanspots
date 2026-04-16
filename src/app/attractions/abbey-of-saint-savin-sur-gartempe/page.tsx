import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣萨万修道院 Abbey of Saint-Savin-sur-Gartempe｜拥有“罗马式西斯廷”壁画的珍宝 - 最佳欧洲景点',
  description: '朋友，如果你对中世纪艺术着迷，那圣萨万修道院绝对是个会让你屏住呼吸的地方。它藏在法国维埃纳河畔一个宁静的小镇上，外表看起来是座典型的罗马式教堂，朴素而庄严。但当你推开那扇厚重的木门，抬头望向拱顶的瞬间，你会被彻底震撼——天啊，整个教堂的穹顶和墙壁，从上到下，铺满了色彩鲜艳、故事性极强的壁画！这些11...',
}

export default function AbbeyOfSaintSavinSurGartempePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '圣萨万修道院', href: '/attractions/abbey-of-saint-savin-sur-gartempe' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">圣萨万修道院・Abbey of Saint-Savin-sur-Gartempe・法国・圣萨万</h1>
          <p className="text-lg text-gray-600 mb-6">
            朋友，如果你对中世纪艺术着迷，那圣萨万修道院绝对是个会让你屏住呼吸的地方。它藏在法国维埃纳河畔一个宁静的小镇上，外表看起来是座典型的罗马式教堂，朴素而庄严。但当你推开那扇厚重的木门，抬头望向拱顶的瞬间，你会被彻底震撼——天啊，整个教堂的穹顶和墙壁，从上到下，铺满了色彩鲜艳、故事性极强的壁画！这些11-12世纪的画作保存得惊人完好，仿佛刚刚画完一样。阳光透过高窗洒进来，照亮了《创世纪》、《出埃及记》等圣经故事里的人物和场景，他们动作生动，表情丰富，就像一部巨大的、立体的连环画。那一刻，你感觉自己不是在看画，而是穿越回了900年前，和当时的信徒一起，仰望着这些用来教化文盲民众的“天堂之书”。那种扑面而来的历史感和艺术冲击力，真的难以用语言形容。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">朋友，如果你对中世纪艺术着迷，那圣萨万修道院绝对是个会让你屏住呼吸的地方。它藏在法国维埃纳河畔一个宁静的小镇上，外表看起来是座典型的罗马式教堂，朴素而庄严。但当你推开那扇厚重的木门，抬头望向拱顶的瞬间，你会被彻底震撼——天啊，整个教堂的穹顶和墙壁，从上到下，铺满了色彩鲜艳、故事性极强的壁画！这些11-12世纪的画作保存得惊人完好，仿佛刚刚画完一样。阳光透过高窗洒进来，照亮了《创世纪》、《出埃及记》等圣经故事里的人物和场景，他们动作生动，表情丰富，就像一部巨大的、立体的连环画。那一刻，你感觉自己不是在看画，而是穿越回了900年前，和当时的信徒一起，仰望着这些用来教化文盲民众的“天堂之书”。那种扑面而来的历史感和艺术冲击力，真的难以用语言形容。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="圣萨万修道院" />
                <InfoRow label="英文名称" value="Abbey of Saint-Savin-sur-Gartempe" />
                <InfoRow label="正式名称" value="Abbey of Saint-Savin-sur-Gartempe" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="圣萨万" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="修道院教堂全年开放，具体时间：夏季（4月1日至9月30日）9:30-19:00；冬季（10月1日至3月31日）9:30-17:30。修道院附属建筑（如回廊、修士宿舍）的开放时间可能略有不同，建议行前查询官网。" />
              <InfoRow label="门票价格" value="进入修道院教堂免费。参观附属建筑（如回廊、修士宿舍）及参加导览游需付费，成人票价约8欧元，优惠票价约6.5欧元。18岁以下及特定人群免费。" />
              <InfoRow label="地址" value="Place de la Libération, 86310 Saint-Savin-sur-Gartempe, France" />
              <InfoRow label="交通方式" value="从巴黎蒙帕纳斯火车站（Gare Montparnasse）乘坐TGV高速列车至普瓦捷（Poitiers）站，车程约1.5小时。从普瓦捷火车站外乘坐TER区域列车前往圣萨万站，车程约30分钟。出站后步行约10分钟即可抵达修道院。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">圣萨万修道院的故事，得从公元9世纪左右说起。传说最初是由查理曼大帝的亲戚——圣萨万和圣西普里安两兄弟，在这里建立了一个小修道院。不过，真正让它名垂青史的，是11世纪中后期开始的大规模重建。那时候，本笃会的修士们决定建造一座宏伟的教堂，来供奉这两位圣徒的遗物。教堂的建筑风格是典型的罗马式，厚重坚固，给人一种沉稳的力量感。但最了不起的，是修士们（或者他们聘请的天才画师团队）决定用壁画来装饰整个内部空间。想想看，在800-900年前，没有现代颜料和脚手架，他们是如何在高高的拱顶和柱子上，一笔一画地描绘出《旧约》和《新约》中数百个场景的？这些壁画不仅是为了美观，更是那个时代最重要的“多媒体”教育工具，让不识字的信徒也能看懂圣经故事。它幸运地躲过了宗教战争和法国大革命的严重破坏，就像一个被时光遗忘的宝盒。直到19世纪，法国政府开始重视它的保护，并在1983年，联合国教科文组织因其无与伦比的罗马式壁画群，将它列入世界遗产名录，称其为“罗马式西斯廷”。站在壁画下，你会觉得，这些鲜活的色彩和线条，是那个信仰时代最直接、最有力的心跳。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议游览时间约1.5-2小时。从教堂西侧主入口进入，先整体感受壁画震撼，然后按顺时针方向，从北侧廊开始，重点欣赏拱顶壁画，再参观唱诗班席位和后殿，最后可付费进入回廊和修士宿舍区域，了解修道院生活。终点通常设在出口处的纪念品商店。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>教堂内部光线较暗，适应一下才能看清高处壁画细节，可以携带一个小型望远镜。地面为石质，建议穿舒适的平底鞋。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从西立面主门进入，首先仰望中殿巨大的筒形拱顶，感受全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  沿北侧廊慢行，仔细观看拱顶上描绘的《创世纪》故事壁画。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  走到十字交叉处，抬头看穹顶上的基督像。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  进入唱诗班席位，观看后殿半圆顶上的《启示录》场景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  （如开放）从教堂侧门进入回廊，感受修道院宁静的中庭。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  参观修士宿舍楼，了解中世纪修道院的日常生活。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  中殿中央仰拍</h4>
                  <p className="text-sm text-gray-700">位置在教堂中殿正中央，最佳拍摄时间是正午前后，阳光直射高窗时。将镜头垂直向上，拍摄整个筒形拱顶的壁画长卷，能获得极具视觉冲击力的对称构图。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  侧廊角度拍柱廊与拱顶</h4>
                  <p className="text-sm text-gray-700">站在侧廊，以一排罗马柱为前景，拍摄延伸向祭坛方向的拱顶壁画，能拍出空间的纵深感和结构美。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  后殿前拍唱诗班席位</h4>
                  <p className="text-sm text-gray-700">在十字交叉处附近，拍摄后殿半圆顶壁画与下方唱诗班木雕座椅的同框画面，体现宗教氛围的肃穆与华丽。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  回廊拱窗</h4>
                  <p className="text-sm text-gray-700">在回廊区域，透过一个拱形石窗，拍摄中庭的花园或对面的廊柱，营造框架构图，富有古典意境。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 切记关闭闪光灯，强光会对千年壁画造成不可逆的损害。室内光线不足，可适当调高相机感光度或使用大光圈镜头。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  经济之选</h4>
                  <p className="text-sm text-blue-800">圣萨万镇上的家庭旅馆（Chambre d‘hôte）或小型民宿，价格亲民，能体验当地风情。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适之选</h4>
                  <p className="text-sm text-green-800">位于普瓦捷市中心的连锁酒店，交通便利，餐饮选择多，参观完修道院后可返回城市住宿。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特色之选</h4>
                  <p className="text-sm text-yellow-800">维埃纳河畔或附近乡村的精品酒店或古堡酒店，环境静谧优美，适合想要深度放松的旅行者。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  便捷之选</h4>
                  <p className="text-sm text-purple-800">选择普瓦捷火车站附近的酒店，便于搭乘火车往返圣萨万及前往其他城市。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">圣萨万小镇非常宁静，住宿选择有限且晚上活动较少。如果喜欢夜生活或更多餐饮选择，建议住在普瓦捷。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">圣萨万修道院带给我的，是一种安静的震撼。它没有巴黎圣母院的名声，也没有圣米歇尔山的险峻，但它用满壁流淌的故事，将信仰与艺术凝固在了最辉煌的瞬间。当你离开时，那些生动的壁画人物，仿佛还在脑海中对你诉说。这是一个值得你专程绕道、静静品味的地方，它会让你明白，真正的伟大，往往藏在最不经意的角落。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
