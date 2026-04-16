import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瑙姆堡大教堂 Naumburg Cathedral｜邂逅中世纪“活生生”的捐助人雕像 - 最佳欧洲景点',
  description: '走进瑙姆堡大教堂，你第一眼就会被西唱诗堂里那十二尊捐助人雕像牢牢抓住目光。天啊，他们简直不像中世纪的石头人，而是活生生的人被瞬间定格在了那里！尤其是乌塔夫人，她微微侧身，用斗篷轻掩面颊，那个眼神既高贵又带着一丝难以言说的忧郁，仿佛能穿透数百年的时光与你对视。教堂本身是罗马式向哥特式过渡的典范，线条庄...',
}

export default function NaumburgCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '瑙姆堡大教堂', href: '/attractions/naumburg-cathedral' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">瑙姆堡大教堂</h1>
          <p className="text-xl text-gray-600 mb-4">Naumburg Cathedral</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">德国</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">瑙姆堡</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">走进瑙姆堡大教堂，你第一眼就会被西唱诗堂里那十二尊捐助人雕像牢牢抓住目光。天啊，他们简直不像中世纪的石头人，而是活生生的人被瞬间定格在了那里！尤其是乌塔夫人，她微微侧身，用斗篷轻掩面颊，那个眼神既高贵又带着一丝难以言说的忧郁，仿佛能穿透数百年的时光与你对视。教堂本身是罗马式向哥特式过渡的典范，线条庄重又轻盈。但真正让这里与众不同的，就是这些13世纪的雕塑家——被称为“瑙姆堡大师”的天才，他赋予了石头灵魂和人性。站在他们面前，你会忘记这是一座教堂，更像是在参观一个中世纪人物的肖像画廊，那种真实感和情感冲击力，太震撼了。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">开放时间可能会因宗教活动或特殊节庆临时调整，建议行前查看官网确认。门票价格包含进入主教堂、回廊和珍宝馆。提供德语、英语等多种语言的语音导览，非常推荐租借，能深入了解雕像背后的故事。教堂内允许拍照（禁用闪光灯和三脚架），但请保持安静肃穆。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">瑙姆堡大教堂的故事始于1028年，当时这里建起了一座早期的罗马式教堂，算是打下了地基。不过，我们今天看到的主体建筑，主要是在13世纪（大约1210年到1250年间）轰轰烈烈建起来的。这个时期特别有意思，建筑风格正处在罗马式的厚重向哥特式的纤巧“转型”的关键期，所以你可以在教堂里同时看到圆拱和尖拱，像一场静默的风格对话。</p>
              <p className="text-gray-700 leading-relaxed mb-4">但真正让这座教堂名垂青史的，是13世纪中叶那位不知名的雕塑大师——我们只能尊称他为“瑙姆堡大师”。当时，教堂西唱诗堂需要装饰，他接到任务，为这座教堂的奠基者和主要捐助人创作雕像。按常理，这些捐助人早已作古一两百年了，常规操作就是做个符号化的纪念像罢了。可这位大师偏不！他仿佛拥有穿越时空的想象力，根据传说和文献，硬是把这些百年前的贵族，塑造成了有血有肉、个性鲜明的“当代人”。比如迈森伯爵埃克哈德，手按剑柄，威风凛凛；他的妻子乌塔，那个经典的回眸姿态，成了德国艺术史上最著名的女性形象之一。想想看，在普遍追求神圣、肃穆的中世纪，出现这样充满世俗情感和人性深度的作品，简直是石破天惊。2018年，大教堂因其独特的、早期哥特式建筑与这些无与伦比的雕塑共同构成的杰出价值，被列入联合国教科文组织世界遗产名录。站在这些雕像前，你感受到的不是神性的威严，而是人性的温度，这大概就是它穿越800年依然直击人心的秘密。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">游览建议用时1.5-2小时。从西侧主入口进入后，先别急着往里冲，在入口处稍作停留，适应光线并感受整体空间。然后直奔最精华的西唱诗堂，仔细观赏捐助人雕像。之后沿主殿向东走，参观主祭坛，再探索北侧的回廊和珍宝馆。最后从出口离开，可以绕教堂外部走半圈，欣赏其建筑轮廓。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从西大门进入，抬头看门楣上的浮雕。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  径直前往西唱诗堂，沉浸式观赏十二捐助人雕像，重点看乌塔和埃克哈德。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  漫步至东端的主祭坛，感受教堂的纵深感与神圣氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  转入北侧回廊，这里更安静，建筑细节优美。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  参观珍宝馆，看中世纪圣物箱和法衣。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  从出口离开，外部回望西立面双塔。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">教堂内部地面平整，但光线较暗，注意脚下。语音导览是理解雕像故事的关键，强烈建议租用。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **西唱诗堂雕像前**：最佳拍摄时间是上午，阳光从东窗射入，能柔和照亮雕像侧面。平视或微仰角度，捕捉乌塔夫人雕像的面部细节和优雅姿态。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **主殿中轴线向东拍**：下午时分，光线从西窗投入。站在中殿中部，将祭坛、柱廊和穹顶收入画面，展现教堂深邃的透视感和宏伟结构。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **回廊拱窗下**：晴天时，利用回廊的拱形窗框作为天然画框，拍摄窗外庭院或教堂外墙，构图富有几何美感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **教堂南侧外部**：傍晚的侧光能清晰勾勒出教堂石头立面的质感和飞扶壁的线条，适合拍摄建筑全景。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">室内务必关闭闪光灯，尊重宗教场所的庄严。拍摄雕像时尽量使用自然光，高ISO设置，以保留石雕的原始质感和阴影层次。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **历史中心酒店**：选择Domplatz（大教堂广场）或步行5分钟范围内的精品酒店，推开窗就能看到教堂塔楼，体验极佳。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **火车站附近旅馆**：对于自驾或乘火车抵达的游客，火车站周边有性价比高的商务旅馆，交通便利。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **萨勒河畔民宿**：瑙姆堡老城萨勒河对岸有一些安静的民宿，环境优美，步行过桥约10-15分钟可达教堂。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **魏玛/耶拿当日往返**：如果行程紧张，可从文化名城魏玛或耶拿出发，乘坐短途火车进行一日游。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">瑙姆堡是小城，旺季（夏季和圣诞季）中心住宿紧张，建议提前预订。住在老城内更能感受中世纪小镇的晨昏魅力。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">瑙姆堡大教堂最动人的，不是它宏大的规模，而是那份凝固在石头里的“人性”。当别的教堂用彩窗和圣像讲述神的故事时，这里却用前所未有的写实雕塑，为你呈现了一群中世纪贵族的悲喜与性格。与乌塔夫人对视的那一刻，时间仿佛消失了。她不是神，也不是符号，只是一个被艺术家永恒铭记的灵魂。这不仅仅是一次教堂参观，更像是一场与八百年前艺术大师的隔空对话，深刻而私密，让人久久回味。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="4月至10月：周一至周六 9:00-18:00，周日及节假日 11:00-18:00；11月至3月：周一至周六 10:00-16:00，周日及节假日 12:00-16:00。" />
                <InfoRow icon="🎫" label="门票" value="成人票 7.5欧元；优惠票（学生、残疾人等）6欧元；家庭票（2成人+最多4名儿童）19欧元；14岁以下儿童免费。语音导览需额外付费。" />
                <InfoRow icon="📍" label="地址" value="Domplatz 16/17, 06618 Naumburg (Saale), Germany" />
                <InfoRow icon="🚌" label="交通" value="从莱比锡/哈勒机场出发，乘坐火车至瑙姆堡火车站（Naumburg (Saale) Hauptbahnhof），车程约1小时。从火车站步行至大教堂约15-20分钟。也可从魏玛或耶拿乘坐地区火车抵达。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
