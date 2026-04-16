import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴德哈尔茨堡 Bad Harzburg｜哈尔茨山脚下的治愈温泉小镇 - 最佳欧洲景点',
  description: '想象一下，你刚从哈尔茨山徒步下来，浑身带着森林的清新和一丝疲惫，然后一头扎进冒着热气的露天温泉池里——这就是巴德哈尔茨堡给我的第一感觉，一个被群山温柔环抱的“充电站”。这里没有大城市的喧嚣，空气里飘着松木和淡淡的硫磺味（别担心，是温泉的味道！）。小镇的主街色彩明快，木筋屋可爱得像童话，但最迷人的还是...',
}

export default function BadHarzburgPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '巴德哈尔茨堡', href: '/attractions/bad-harzburg' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">巴德哈尔茨堡</h1>
          <p className="text-xl text-gray-600 mb-4">Bad Harzburg</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">德国</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">巴德哈尔茨堡</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你刚从哈尔茨山徒步下来，浑身带着森林的清新和一丝疲惫，然后一头扎进冒着热气的露天温泉池里——这就是巴德哈尔茨堡给我的第一感觉，一个被群山温柔环抱的“充电站”。这里没有大城市的喧嚣，空气里飘着松木和淡淡的硫磺味（别担心，是温泉的味道！）。小镇的主街色彩明快，木筋屋可爱得像童话，但最迷人的还是那份慵懒的疗愈氛围。人们穿着浴袍在街上闲逛，目标明确地奔向各个温泉池，或者只是坐在咖啡馆外，对着远处的布罗肯峰发呆。它不像那些名声在外的温泉胜地那么拥挤，更像是一个德国人私藏的放松后花园。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">“Vitalis温泉世界”的开放时间全年固定，但旺季（冬季和夏季假期）可能延长至23:00。门票对4-15岁儿童、学生、残疾人士及20人以上团体有折扣。温泉区提供毛巾和储物柜租赁（需额外付费）。小镇的游客信息中心（Kurverwaltung）也提供各种徒步地图和“疗养卡”（Kurkarte），持卡可享受当地部分景点和交通的优惠。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">巴德哈尔茨堡的故事，可以说是一部从“城堡”到“温泉”的转型史。它的名字源于一座建于11世纪的古老城堡——哈尔茨堡，最初是用于控制重要的贸易路线。可惜这座城堡在战争中损毁，如今只剩下一些浪漫的遗迹俯瞰着小镇。转折点发生在19世纪，人们发现了这里的盐泉和温泉资源。好家伙，这下可不得了！从1860年代开始，它正式被开发为温泉疗养地，“Bad”（意为温泉浴场）这个前缀也加到了名字里。想想看，那时候的贵族和富人们，坐着马车来到山里，就是为了泡一泡这“神奇”的泉水。小镇迅速建起了华丽的疗养馆（Kurhaus）、公园和林荫道，形成了今天看到的古典优雅的骨架。二战后的经济奇迹时期，它更是成为了德国中产阶级喜爱的度假胜地。如今，古老的城堡废墟和现代化的温泉设施奇妙地共存，一个诉说着权力的过往，一个提供着当下的惬意，这种反差本身就很有意思。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">建议安排大半天到一天时间。从火车站或镇中心的游客信息中心出发，先轻松游览小镇核心区，然后乘缆车上山探访城堡遗迹并享受全景，最后下山体验温泉，以彻底的放松结束旅程。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从主街（Herzog-Julius-Straße）开始，感受小镇的彩色建筑和疗养氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  参观地标建筑“疗养馆”及其前方的温泉喷泉。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  步行至山谷缆车站，乘坐复古缆车上哈尔茨堡山。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  在山顶游览哈尔茨城堡遗迹，远眺布罗肯峰。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  下山后前往“Vitalis温泉世界”或镇上的公共温泉池放松。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  有时间可漫步至小镇边缘的“菩提树公园”（Lindenpark）。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">上山缆车需要单独购票，运营时间随季节调整，出发前最好在官网确认。建议穿舒适的步行鞋，因为上山后游览遗迹需要走一些碎石路。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **缆车车厢内**：最佳拍摄时间为晴朗的下午，从车厢内向外拍摄上升过程中逐渐展开的山谷和小镇全景，动态感十足。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **哈尔茨城堡遗迹观景台**：日落前半小时，以古老的石墙为前景，拍摄远处连绵的哈尔茨山脉和夕阳染红的天际，画面苍茫壮丽。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **小镇主街尽头**：清晨或午后，站在街口，利用街道的纵深感，将色彩缤纷的木筋屋、行人以及远处朦胧的山影一同纳入镜头，生活气息浓厚。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **Vitalis温泉世界露天池**：傍晚华灯初上时，从池边拍摄人们泡在温暖的蒸汽中、背景是夜色和山影的照片，氛围感拉满（拍摄时请注意尊重他人隐私）。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">拍摄温泉区内部请务必遵守规定，尊重其他客人，一般禁止在泳池区域使用专业设备或开闪光灯。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **高端疗养酒店**：选择镇中心或靠近温泉的四星级疗养酒店，通常包含半膳（早餐和晚餐）和免费温泉入场券，体验一站式疗愈。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **温馨家庭旅馆**：小镇周边有许多由家族经营的“Pension”（公寓式旅馆），价格亲民，房间干净舒适，能体验本地人的生活氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **山间民宿**：如果想更贴近自然，可以选择位于上山缆车站附近或徒步小径旁的民宿，推窗见山，环境清幽。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **经济型连锁酒店**：火车站附近有诸如宜必思等品牌酒店，适合预算有限或仅作短暂停留的旅客。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（尤其是圣诞市场期间和夏季徒步季）务必提前预订。许多酒店都提供与当地公共交通和景点联动的“疗养套餐”，性价比很高。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">巴德哈尔茨堡最打动我的，是它把自然的壮美和身心的疗愈结合得如此不着痕迹。你可以在山林里耗尽体力，然后回到小镇的温柔怀抱中彻底恢复。它不张扬，却充满细节的魅力——可能是温泉里抬头看见的星空，也可能是咖啡馆里一块扎实的苹果卷。如果你厌倦了打卡式的旅行，想找一个地方真正地“停下来”，这里会是一个让你忘记时间、只管呼吸和感受的完美选择。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="小镇全年开放。主要温泉设施“Vitalis温泉世界”每日开放，具体时间为10:00-22:00。" />
                <InfoRow icon="🎫" label="门票" value="“Vitalis温泉世界”日票：成人约20欧元，儿童有优惠。部分酒店住客可享受折扣或免费入场。小镇本身无需门票。" />
                <InfoRow icon="📍" label="地址" value="Kurhausstraße 7, 38667 Bad Harzburg, Germany" />
                <InfoRow icon="🚌" label="交通" value="从汉诺威机场出发，乘坐火车（RE或RB线路）至巴德哈尔茨堡火车站，全程约1.5小时。从火车站步行至镇中心仅需10分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
