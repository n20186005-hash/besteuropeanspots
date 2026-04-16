import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格蒙登湖城 Gmunden｜特劳恩湖上的陶瓷小镇与水上城堡 - 最佳欧洲景点',
  description: '想象一下，你站在特劳恩湖边，眼前是碧蓝的湖水和远处阿尔卑斯山的轮廓，而一座白色的、尖顶的城堡就建在离岸几十米的湖心小岛上，只靠一条长长的木桥与陆地相连——这就是格蒙登给你的第一眼震撼。这里不像大都市那样喧闹，空气里飘着咖啡香和淡淡的湖水气息。老城区的房子色彩柔和，很多店铺的招牌都是当地特产——格蒙登...',
}

export default function GmundenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '格蒙登湖城', href: '/attractions/gmunden' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">格蒙登湖城</h1>
          <p className="text-xl text-gray-600 mb-4">Gmunden</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">奥地利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">格蒙登</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你站在特劳恩湖边，眼前是碧蓝的湖水和远处阿尔卑斯山的轮廓，而一座白色的、尖顶的城堡就建在离岸几十米的湖心小岛上，只靠一条长长的木桥与陆地相连——这就是格蒙登给你的第一眼震撼。这里不像大都市那样喧闹，空气里飘着咖啡香和淡淡的湖水气息。老城区的房子色彩柔和，很多店铺的招牌都是当地特产——格蒙登陶瓷，那种白底配上精致蓝绘的瓷器，特别清新雅致。你可以坐在湖边的露天咖啡馆，看着天鹅游过，或者跳上一艘老式蒸汽船，在湖上慢慢漂，感觉时间都跟着慢下来了。这里既有皇家的优雅（哈布斯堡王朝的夏宫就在这儿），又有一种小镇特有的、懒洋洋的惬意。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">奥尔特宫（水上城堡）的开放时间随季节变化较大，冬季部分区域可能关闭，建议行前官网确认。陶瓷厂除了参观，通常还有工坊体验，需提前预约。小镇节庆活动丰富，如夏季的湖滨音乐会和圣诞市场，届时氛围更佳。持有“萨尔茨卡默古特地区卡”可能享受部分景点折扣。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">格蒙登的故事，和它湖里丰富的盐矿资源分不开。早在中世纪，这里的盐就是“白色黄金”，为小镇带来了最初的繁荣。不过，让它真正“出圈”的，还是那座建在湖心石头上的奥尔特宫。最初的城堡建于10世纪左右，用于防御和管理盐务。到了16世纪，它被改建成了我们今天看到的这般文艺复兴风格的优雅模样，不再是军事堡垒，而成了贵族们享受湖光山色的度假行宫。哈布斯堡王朝的皇室成员，特别是19世纪的奥地利皇帝弗朗茨·约瑟夫一世和著名的茜茜公主，都曾钟情于此，常来避暑，让格蒙登镀上了一层皇家度假胜地的金光。与此同时，小镇另一张名片——格蒙登陶瓷，也在17世纪开始蓬勃发展，其经典的“格蒙登绿”和钴蓝彩绘餐具，成为了奥地利乃至欧洲许多家庭的餐桌宠儿。漫步在老城里，看着那些有百年历史的陶瓷店，触摸着光滑的釉面，你会感觉历史不只是写在书上，也烧制在这些精美的杯盘之中，沉淀在宁静的湖水里。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">建议从湖滨主广场开始，沿着湖畔散步道欣赏湖景与奥尔特宫远景，然后过桥参观奥尔特宫，之后返回老城区逛逛陶瓷店和市政厅，最后可乘船游湖。全程步行游览约需3-4小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从镇中心的集市广场出发，感受小镇活力。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  漫步特劳恩湖滨长廊，远眺湖心奥尔特宫全景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  走过长长的木桥，进入奥尔特宫参观内部房间与展览。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  返回主岸，参观格蒙登陶瓷厂或老城区的陶瓷专卖店。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  登上老式蒸汽明轮船“格蒙登号”，进行环湖游览。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  参观小镇地标之一的市政厅及其著名的陶瓷钟楼。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">小镇非常适合步行探索，穿一双舒适的鞋子即可。木桥通往奥尔特宫是单向通行，需注意指示。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **湖滨长廊眺望点**：清晨或傍晚，阳光柔和时，从长廊拍摄奥尔特宫与木桥的倒影，画面宁静富有诗意。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **奥尔特宫木桥中段**：上午顺光时分，以城堡为背景拍摄人像，或单独拍摄城堡与湖面的近景，建筑细节清晰。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **老城陶瓷店橱窗前**：白天任何时间，聚焦色彩斑斓、图案精美的陶瓷器皿，拍摄富有生活气息和当地特色的静物照片。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **蒸汽船甲板上**：乘船时，从湖心角度回望格蒙登小镇全景，将湖岸建筑、远山与蓝天一同纳入镜头。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">拍摄湖景和城堡时，使用偏振镜可以减少湖面反光，让天空和湖水颜色更饱和。尊重陶瓷店内的拍照规定，通常允许拍摄橱窗。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **湖畔精品酒店**：选择直接位于特劳恩湖畔的酒店，开窗即见湖景与城堡，体验最佳，价格偏高。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **老城中心旅馆**：住在集市广场附近，吃饭购物方便，更能融入当地生活，性价比高。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **特色民宿或公寓**：适合家庭或多人出行，可体验当地社区氛围，通常带有小厨房。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **周边乡村膳宿公寓**：如果自驾，可以选择小镇周边宁静村庄里的住宿，享受田园风光。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">夏季旅游旺季和重大节庆期间住宿非常紧张，务必提前预订。许多湖畔酒店自带码头或游泳区。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">格蒙登就像一个被山水精心呵护的梦。它没有令人窒息的宏伟，却有一种恰到好处的美好——湖是清澈的，城堡是秀美的，瓷器是温润的，连时间都流淌得格外温柔。在这里，你会不自觉地放慢脚步，用心去感受每一缕风、每一道波光、每一件手工艺品背后的温度。如果你想寻找一处能同时安放眼睛与心灵，既有故事可讲又有宁静可享的欧洲小镇，格蒙登绝对会在你的记忆里，留下像它的陶瓷一样洁白而闪亮的一笔。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="小镇全天开放，主要景点如奥尔特宫、陶瓷厂参观等有各自开放时间，通常为夏季（5月-9月）9:00-18:00，冬季时间缩短。" />
                <InfoRow icon="🎫" label="门票" value="进入小镇免费。奥尔特宫门票约12欧元，陶瓷厂参观约8欧元，乘船游湖约15欧元起。" />
                <InfoRow icon="📍" label="地址" value="Gmunden, 4810, Upper Austria, Austria" />
                <InfoRow icon="🚌" label="交通" value="从萨尔茨堡机场（SZG）出发，驾车或乘坐火车约1小时15分钟可抵达格蒙登火车站。从维也纳驾车约2.5-3小时。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
