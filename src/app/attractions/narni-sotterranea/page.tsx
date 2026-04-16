import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '纳尔尼古城 Narni Sotterranea｜探索中世纪地下迷宫与神秘宗教壁画 - 最佳欧洲景点',
  description: '朋友，如果你觉得地上的意大利古城看腻了，那一定要来纳尔尼，钻到地下去！这里简直是个被时间遗忘的平行世界。穿过一扇不起眼的小门，沿着狭窄的螺旋石阶往下走，空气瞬间变得潮湿凉爽，中世纪的气息扑面而来。手电筒的光束划过古老的石墙，照亮了沉睡数百年的房间、水窖，还有那个最震撼的——一座完整的中世纪教堂，墙壁...',
}

export default function NarniSotterraneaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '纳尔尼古城', href: '/attractions/narni-sotterranea' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">纳尔尼古城</h1>
          <p className="text-xl text-gray-600 mb-4">Narni Sotterranea</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">意大利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">纳尔尼</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">朋友，如果你觉得地上的意大利古城看腻了，那一定要来纳尔尼，钻到地下去！这里简直是个被时间遗忘的平行世界。穿过一扇不起眼的小门，沿着狭窄的螺旋石阶往下走，空气瞬间变得潮湿凉爽，中世纪的气息扑面而来。手电筒的光束划过古老的石墙，照亮了沉睡数百年的房间、水窖，还有那个最震撼的——一座完整的中世纪教堂，墙壁上色彩斑驳的壁画仿佛在低声讲述古老的故事。导游会神秘兮兮地告诉你这里和圣殿骑士团的关联，感觉下一秒丹·布朗小说里的情节就要上演了。整个探索过程像一场真正的冒险，特别带感！</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">参观必须参加由“纳尔尼地下协会”组织的导览团（意大利语或英语），时长约1小时。强烈建议提前在其官网或通过电话预约，尤其是旺季和周末。内部温度常年保持在14-16摄氏度，建议携带一件薄外套。部分通道较为狭窄低矮，请注意安全。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">纳尔尼地下的故事，得从古罗马时期说起。最初，这里可能是罗马人的蓄水池或仓库，那些巨大的拱顶结构就是证据。时间跳到中世纪，大约在12-13世纪，地面上建起了圣多梅尼科教堂，而地下这些空间被赋予了新的生命。它们成了教堂的附属建筑，也许是储藏室，也许是举行秘密集会的地方——这也引出了它最迷人的传说：这里很可能与神秘的圣殿骑士团有关联！一些符号和建筑特征暗示了这一点。然而，漫长的岁月里，这些地下房间逐渐被遗忘，甚至被当作垃圾填埋场。转机发生在1979年，一群当地的考古爱好者和学生，像寻宝一样开始了挖掘。你猜怎么着？他们真的挖到了“宝”！不仅清理出了复杂的房间网络，更惊人的是，发现了一个完全被泥土掩埋的中世纪教堂，里面保存着珍贵的13世纪壁画《耶稣受难图》。这次发现让纳尔尼地下重见天日，也让我们有机会走进这段被尘封的、交织着信仰、秘密与历史的多层故事里。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">游览全程跟随导游，路线固定。从地面售票处旁的入口开始，向下探索多层地下结构，重点参观罗马式水窖、中世纪房间及壁画教堂，最后从另一出口返回地面。全程约1小时，需步行上下楼梯。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从圣多梅尼科教堂广场旁的入口下楼，进入地下世界。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  参观古老的罗马式水窖，感受巨大的拱形空间。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  穿过一系列中世纪房间，了解其可能用途。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  抵达核心——隐藏的中世纪教堂，欣赏《耶稣受难图》壁画。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  参观宗教裁判所时期的狭窄牢房。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  沿着通道上行，从出口返回现代街道。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">一定要跟紧导游听讲解，故事比景色更精彩。建议穿防滑舒适的平底鞋，部分石阶潮湿且不平。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **壁画教堂中央**：进入教堂第一时间拍摄，利用导游的手电筒光突出壁画沧桑感，效果神秘肃穆。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **罗马水窖拱门下**：从水窖一端拍摄长长的拱廊，营造深邃的历史纵深感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **螺旋楼梯俯拍**：在确保安全的前提下，可从楼梯上部向下拍，捕捉旋转的线条和光影。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">室内光线非常暗，禁止使用闪光灯（会损害壁画），可尝试调高相机感光度或使用手机夜景模式。拍照时请勿触碰任何墙壁。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **纳尔尼历史中心民宿**：住在古城石头房子里，体验中世纪氛围，步行至景点仅几分钟。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **特尔尼（Terni）市区酒店**：选择更多，性价比高，乘短途巴士即可抵达纳尔尼。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **斯波莱托（Spoleto）附近农庄**：享受翁布里亚田园风光，适合自驾游客。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **纳尔尼郊外精品酒店**：通常由古老建筑改建，安静且有设计感。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">如果主要想探索纳尔尼地下，强烈推荐住在纳尔尼镇上，傍晚在空无一人的中世纪街巷散步感觉超棒。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">纳尔尼地下之旅更像是一次穿越时空的触碰，而不仅仅是观看。当指尖掠过冰凉的千年石壁，当在绝对的寂静中凝视那些依稀可见的壁画色彩，你会真切地感受到历史并非书本上的文字，而是可以呼吸、可以行走其中的真实存在。这是一个充满故事感的角落，特别适合那些好奇表面之下藏着什么秘密的旅行者。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="导览团时间：通常为每日10:00, 12:00, 15:00, 17:00（具体时间随季节变动，需提前预约）" />
                <InfoRow icon="🎫" label="门票" value="成人票约10欧元，优惠票（学生、65岁以上老人）约8欧元，儿童（6-12岁）约5欧元，6岁以下免费。" />
                <InfoRow icon="📍" label="地址" value="Via S. Bernardo, 12, 05035 Narni TR, Italy" />
                <InfoRow icon="🚌" label="交通" value="从罗马菲乌米奇诺机场（FCO）出发，乘坐火车至特尔尼（Terni）站（约1.5小时），再转乘地区巴士或出租车前往纳尔尼（约20-30分钟）。从纳尔尼镇中心步行至景点入口约5-10分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
