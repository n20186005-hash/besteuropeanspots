import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃皮达鲁斯古剧场历史溯源｜穿越千年的舞台，聆听古希腊的天人对话',
  description: '在伯罗奔尼撒的青山间，探秘世界上保存最完好的古希腊剧场。从医学圣地到悲剧摇篮，这里镌刻着戏剧的诞生、神的庇护与理性的光辉。',
}

export default function EpidaurusTheatreHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '伯罗奔尼撒', href: '/destinations/europe' },
            { label: '埃皮达鲁斯古剧场', href: '/attractions/epidaurus-theatre-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃皮达鲁斯古剧场・Ancient Theatre of Epidaurus・希腊・伯罗奔尼撒`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说德尔斐是聆听神谕的圣地，奥林匹亚是见证力量的赛场，那么埃皮达鲁斯，则是古希腊人治愈身心的圣殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它首先是一座宏伟的“医院”，其次才是一座完美的剧场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的传奇始于医神阿斯克勒庇俄斯的圣蛇，却最终在人类艺术的巅峰——悲剧的回响中，抵达了不朽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进埃皮达鲁斯的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃皮达鲁斯古剧场`} />
                <InfoRow label="英文名称" value={`Ancient Theatre of Epidaurus`} />
                <InfoRow label="正式名称" value={`Ancient Theatre of Epidaurus`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`伯罗奔尼撒`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片土地的脉搏，始于一个关于“治愈”的神话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约在公元前六世纪，伯罗奔尼撒半岛东北部的这片宁静山谷，因其清泉、温和气候与遍地的草药，被认定为医神 <strong>阿斯克勒庇俄斯</strong> 的显现之地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿斯克勒庇俄斯并非奥林匹斯的主神，他是阿波罗之子，一位因医术高超甚至能起死回生，而被宙斯用雷霆处死的半神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正因这份介于神与人之间的特质，他成了凡人最亲近的求助对象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“埃皮达鲁斯”这个名字本身，可能源自一位更古老的当地英雄或神祇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但很快，这片土地便与阿斯克勒庇俄斯紧紧绑定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的圣所极其简陋，可能只是一处有清泉涌出的洞穴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "病人来到这里，进行一种名为“ incubation ”（宿庙祈梦）的独特治疗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们睡在圣殿的廊道里，期待医神在梦中降临，以触摸或圣蛇舔舐的方式治愈疾病。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "痊愈者则会献上陶制或石制的患病部位模型，作为还愿物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元前四世纪，随着希腊文明的鼎盛与对健康的极致追求，埃皮达鲁斯迎来了它的黄金时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它从一个简陋的疗愈洞穴，演变为一个功能齐全的“疗养城”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里有健身房、浴室、体育馆、旅馆，甚至最早的“病历”记录。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不再是绝望病人的最后稻草，而是古希腊精英阶层进行身心疗愈与休闲社交的“度假康养中心”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座剧场的基石，便在这人神共舞、身心合一的独特土壤中，被悄然奠定。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃皮达鲁斯最辉煌的印记，无疑是那座被松林环抱的扇形剧场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它建于公元前四世纪末，正值希腊化时代黎明。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "建筑师的签名是 <strong>波利克莱托斯</strong> ，但此“波利克莱托斯”并非那位著名的雕塑家，可能是一位同名的杰出建筑师。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座剧场是功能主义的奇迹，更是数学与声学的圣殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的 <strong>55 排座位</strong>，依山势开凿而成，可容纳约一万四千名观众。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "下層 <strong>34 排</strong> 为原始建造，上層 <strong>21 排</strong> 则是罗马时期扩建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "剧场的核心秘密在于其完美的<strong>声学效果</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "站在舞台中央的圆形石板上低声细语，甚至撕碎一张纸，声音都能清晰地传到最后排的座位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种奇迹源于精密的计算：阶梯状座位的弧度完美反射声波，多孔石灰岩座位吸收低频杂音，加上观众身体的吸音作用，共同构成了这座天然的音响殿堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非为娱乐而建，而是治疗仪式的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "戏剧演出，尤其是 <strong>埃斯库罗斯、索福克勒斯、欧里庇得斯</strong> 的悲剧，被视为净化心灵、陶冶情操的“心理疗法”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在神圣的休战月期间，人们从希腊各地涌向埃皮达鲁斯。他们不仅寻求身体的康复，也在悲剧的‘卡塔西斯’（净化）中，宣泄情感，获得精神的平衡。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 基于古希腊文献的现代解读" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的浪潮终会改变一切。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>公元前 86 年</strong>，罗马统帅苏拉洗劫了圣所，掠走大量财宝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管如此，埃皮达鲁斯在罗马帝国时期依然繁荣，甚至得以扩建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点在公元四世纪，随着<strong>基督教</strong>被定为罗马国教，这座供奉异教医神的圣地被官方下令关闭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "剧场逐渐被废弃、掩埋，最终被地震和时光的尘土覆盖，在漫长的中世纪里被人遗忘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的重新发现，要等到近代考古学的曙光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1881 年</strong>，希腊考古协会开始了系统的发掘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当层层泥土被揭开，这座沉睡了千年的剧场以近乎完美的姿态重见天日，震惊了世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不仅是一个考古遗址，更是一个被重新激活的文化空间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1955 年</strong>，首届“埃皮达鲁斯节”在此举办，古老的石阶再次坐满了现代观众，聆听索福克勒斯与欧里庇得斯的台词。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史在这一刻，完成了跨越两千年的回响。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>索福克勒斯：悲剧大师与圣地守护者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要谈论埃皮达鲁斯，无法绕过 <strong>索福克勒斯</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位与埃斯库罗斯、欧里庇得斯齐名的悲剧诗人（公元前496-406年），一生创作了超过120部剧作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的《俄狄浦斯王》、《安提戈涅》奠定了西方戏剧的思想深度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但鲜为人知的是，他与埃皮达鲁斯有着超乎寻常的紧密联系。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元前420年左右，雅典爆发瘟疫，人们将医神阿斯克勒庇俄斯的崇拜正式引入雅典。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而承担迎接圣蛇、建立雅典阿斯克勒庇俄斯圣所这一神圣使命的，正是德高望重的索福克勒斯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，他甚至在自己家中为医神设立祭坛，直至圣殿建成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因其虔敬，他去世后被雅典人尊称为“ Dexion ”（接纳者）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "索福克勒斯本人可能多次到访埃皮达鲁斯的主圣所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更深刻的影响在于，他的戏剧作品成为了这里“戏剧疗法”的核心剧本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的剧作探讨命运、伦理、人与神的冲突，其引发的恐惧与怜悯，正是“净化”心灵的最佳媒介。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在埃皮达鲁斯的星空下上演《俄狄浦斯王》，其感染力是剧场与文本的天作之合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>波利比乌斯：历史学家的见证</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与埃皮达鲁斯产生交集的名人，是历史学家 <strong>波利比乌斯</strong>（约公元前200-118年）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他本是希腊城邦麦加洛波利斯的贵族，后被作为人质带往罗马，却因此成为罗马崛起的亲密观察者与记录者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在他的巨著《历史》中，埃皮达鲁斯并非主角，却提供了一个观察希腊世界衰落的独特视角。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "波利比乌斯见证了希腊化时代末期，希腊本土在罗马强权下的窘迫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他记载了圣所的管理、财富的积累，以及它在希腊世界持续的影响力。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“埃皮达鲁斯圣所的财富是惊人的，不仅来自各地的还愿进献，其本身拥有的土地、奴隶和投资也构成了庞大的经济实体。它是宗教中心，也是一个非常现代的经济管理机构。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 波利比乌斯《历史》选段意译" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "通过波利比乌斯冷静的笔触，我们看到埃皮达鲁斯不仅是精神寄托，更是一个庞大、富有的“跨国公司”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的兴盛，是古希腊宗教、经济、社会网络高度发达的缩影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而它的最终衰落，也隐喻了希腊独立世界的终结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "波利比乌斯本人，作为连接希腊与罗马两个世界的桥梁，其著作本身就像埃皮达鲁斯剧场一样，成为了一个记录文明变迁的“回音壁”。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃皮达鲁斯的传说，始终缠绕着圣蛇的形象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，医神阿斯克勒庇俄斯常以一条<strong>温顺的巨蛇</strong>形象显现，或用蛇信舔舐病人的伤口以注入治疗的灵力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，圣所内饲养着许多无毒的花斑蛇，它们在殿堂内自由爬行，被视为医神的化身与圣所的守护者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到今天，蛇依旧是医学的标志“蛇杖”的起源。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于剧场无与伦比的音效，当地流传着一个迷人的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们相信，建筑师在建造时，在座位底下的地基里，精心<strong>埋置了共鸣的青铜瓮</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些神秘的空腔如同天然的音响放大器，捕捉并传递着舞台上最细微的声响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "现代考古发掘并未证实这些铜瓮的存在，但传说本身却反映了古人对这一声学奇迹的敬畏与神话解释。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它暗示着，这完美之声并非完全出于自然，更是古人智慧与神赐灵感的结合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说涉及剧场的“幽灵座位”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，在月圆之夜或夏季戏剧节上演古典悲剧时，最后排的某些石座上，会出现若隐若现的古代观众身影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们安静地坐着，如同两千年前一样，为舞台上人类的命运唏嘘感叹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这传说或许源于光影的把戏，抑或是松风穿过石隙的呜咽，但它赋予了这座石头建筑超越时间的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "让每个现代访客都感到，自己并非唯一的观众，正与无数往昔的灵魂共享同一片星光下的艺术盛宴。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "站在埃皮达鲁斯古剧场的舞台中央，你聆听的远不止声音的测试。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你站在古希腊文明一个鲜活的交叉点上：这里是<strong>医学</strong>与<strong>戏剧</strong>的交汇，<strong>身体</strong>与<strong>心灵</strong>的共治，<strong>理性</strong>的建造技艺与<strong>神性</strong>的信仰崇拜的融合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不像卫城那般彰显权力的荣耀，也不像德尔斐那般充满神谕的玄秘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃皮达鲁斯是<strong>入世</strong>的，是关怀的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它关乎普通人的病痛、恐惧、情感宣泄与精神求索。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座保存完好的剧场，因此成为一扇无可替代的窗口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它让我们直观感受到，古希腊人对于“完整的人”的理解是何其深刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "健康不仅是肉体的无痛，更是精神的和谐。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而艺术，尤其是悲剧，是实现这种和谐的最高形式之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当最后一缕夕阳为石灰岩座位镀上金色，风声松涛取代了演员的吟唱，你依然能感受到那份穿越千年的、庄严而宁静的治愈力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的故事，是关于人类如何用石头、诗歌与信仰，回应生命固有的脆弱，并试图触及永恒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/paros-panagia-ekatontapiliani" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕罗斯岛百门教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Panagia Ekatontapiliani</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nissyros-stefanos-volcanic-crater" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    尼
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">尼西罗斯岛斯特凡诺斯火山口</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nisyros Stefanos Crater</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vatheia-towers" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦西亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vatheia</p>
                  </div>
                </div>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
