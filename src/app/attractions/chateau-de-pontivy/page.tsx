import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蓬蒂维城堡 Château de Pontivy｜中世纪石堡与拿破仑新城的时空对话 - 最佳欧洲景点',
  description: '第一眼看到蓬蒂维城堡，你就会被它那种混合的气质吸引。它不像那些童话里精致浪漫的城堡，而是座敦实、严肃的石头巨人，带着中世纪的粗犷感，静静地立在布莱夫河畔。走进城堡庭院，脚下是历经风雨的石板路，四周是高耸的城墙和圆塔，瞬间有种穿越回骑士时代的感觉。但有趣的是，走出城堡没多远，你又会看到拿破仑时期规划的...',
}

export default function ChateauDePontivyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '蓬蒂维城堡', href: '/attractions/chateau-de-pontivy' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">蓬蒂维城堡</h1>
          <p className="text-xl text-gray-600 mb-4">Château de Pontivy</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">法国</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">蓬蒂维</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到蓬蒂维城堡，你就会被它那种混合的气质吸引。它不像那些童话里精致浪漫的城堡，而是座敦实、严肃的石头巨人，带着中世纪的粗犷感，静静地立在布莱夫河畔。走进城堡庭院，脚下是历经风雨的石板路，四周是高耸的城墙和圆塔，瞬间有种穿越回骑士时代的感觉。但有趣的是，走出城堡没多远，你又会看到拿破仑时期规划的笔直大道和规整建筑，这种新旧交织的时空错位感，正是蓬蒂维最独特的魅力。城堡内部现在是个小型博物馆，陈列着本地历史文物，光线从窄窗透进来，氛围特别宁静。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">城堡内部开放时间会因临时展览或活动调整，建议出行前查看官网公告。每年7月和8月有夜间特别开放活动。门票优惠也适用于10人以上的团体。城堡部分区域（如城墙步道）在雨天可能关闭以确保安全。花园可免费进入，是野餐和散步的好地方。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">蓬蒂维城堡的故事始于13世纪，最初是罗昂家族领主的一座防御性堡垒，用来控制布莱夫河这个战略要地。你如今看到的那些厚实城墙和圆塔，大多是在15世纪加固扩建的，充满了典型的布列塔尼军事建筑风格，能想象当年弓箭手从箭垛后观察敌情的样子。到了17世纪，随着战争方式变化，城堡的军事意义下降，逐渐转变为行政中心和贵族住所。法国大革命时期它曾被没收，差点被拆毁，好在当地居民极力保护才幸存下来。最有意思的转折在19世纪初，拿破仑一世为了加强对布列塔尼的控制，决定把蓬蒂维建设成一座现代化的“拿破仑城”，规划了棋盘式的街道。于是城堡这个中世纪遗珠，突然被包围在一片规整的新古典主义建筑中，形成了今天这种奇妙的对比。20世纪后，城堡被列为历史古迹并修复，现在作为博物馆向公众开放，静静讲述着这片土地从封建时代到帝国时代的层叠历史。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">游览建议从城堡正门（东门）开始，先参观内部博物馆了解历史，然后登上城墙俯瞰全景，最后漫步花园并欣赏外观。全程悠闲游览约需1.5-2小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从东门进入城堡主庭院，感受中世纪堡垒的宏伟尺度。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  参观主楼内的历史博物馆，观看罗昂家族和本地历史的展品。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  沿着北侧城墙的步道行走，眺望布莱夫河与老城区屋顶。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  进入城堡西南角的圆塔，体验狭窄的螺旋楼梯和防御结构。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  走下城墙，在城堡花园里放松，从南侧欣赏城堡全景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  走出城堡，沿着河岸散步，对比中世纪城堡与拿破仑新城的风貌。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">城堡内部分楼梯较陡且狭窄，建议穿舒适的平底鞋。博物馆有法语和英语说明牌。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **城堡花园南侧草坪**：最佳拍摄时间为下午，阳光能照亮城堡正面。从草坪仰拍，可以拍到城堡主体与蓝天，构图宏伟。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **北侧城墙步道**：最佳时间为清晨或傍晚。从城墙垛口向外拍摄，能将布莱夫河、老桥与对岸的拿破仑式建筑一同纳入镜头，形成古今对比。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **布莱夫河对岸的步行桥**：日落时分最佳。在桥上拍摄城堡在水中的倒影，以及被夕阳染成金色的石墙，画面宁静富有诗意。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">使用广角镜头可以更好地捕捉城堡的宏伟气势。室内博物馆允许拍照但禁止使用闪光灯。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **经济型**：位于拿破仑新城区的“中央酒店”，价格实惠，步行至城堡约10分钟。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **舒适型**：老城河畔的“布莱夫旅馆”，房间能看到城堡侧影，风格温馨。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **特色型**：城堡附近由老房子改造的“罗昂之家”民宿，体验本地生活，需提前预订。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">夏季旅游旺季蓬蒂维住宿较紧张，建议提前预订。选择老城区的住宿更能感受小镇氛围。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">蓬蒂维城堡就像一本立体的历史书，石头垒起的是岁月的层次。它不张扬，却用沉默的城墙和与新城奇异的并置，讲述着时间的流动与沉淀。在这里，你能同时触摸到中世纪的厚重与拿破仑时代的野心，这种独特的时空交错感，让一趟简单的城堡游览变成了一次深邃的历史漫步，非常值得静下心来细细品味。</p>
            </Section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
              </p>
              <p className="text-xs text-gray-500 text-center">
                管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">实用信息</h3>
              <div className="space-y-4">
                <InfoRow icon="🕒" label="开放时间" value="城堡内部及博物馆开放时间：夏季（4月至9月）每日10:00-18:30；冬季（10月至3月）周三至周日14:00-17:30。城堡花园全年开放。" />
                <InfoRow icon="🎫" label="门票" value="成人票：6欧元；优惠票（学生、65岁以上老人）：4欧元；12岁以下儿童免费。家庭套票（2大2小）15欧元。" />
                <InfoRow icon="📍" label="地址" value="Place du Martray, 56300 Pontivy, France" />
                <InfoRow icon="🚌" label="交通" value="从雷恩布列塔尼机场出发，驾车沿N24公路向西北行驶约1小时15分钟可达。从雷恩火车站乘坐TER区域火车至蓬蒂维站，车程约1.5小时，出站后步行15分钟即到城堡。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
