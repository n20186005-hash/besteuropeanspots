import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '玛丽亚温泉市历史溯源｜皇家疗养城的优雅前世与名人轶事',
  description: '走进波西米亚森林深处的疗养圣殿。从修道院清泉到欧洲宫廷的社交中心，追溯**歌德**、**肖邦**、**爱德华七世**在此留下的传奇印记，聆听一砖一泉间的百年回响。',
}

export default function MarianskeLazneHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '玛丽亚温泉市', href: '/destinations/europe' },
            { label: '玛丽亚温泉市', href: '/attractions/marianske-lazne-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`玛丽亚温泉市・Mariánské Lázně・捷克・玛丽亚温泉市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在欧洲的心脏，波西米亚的苍翠山林深处，藏着一座被时光精心打磨的“客厅之城”。这里没有硝烟的印记，却镌刻着十九世纪欧洲最精致的优雅、最私密的疗愈，与最传奇的邂逅。它不是一座因战争或贸易而兴的城镇，它的诞生，源于大地深处涌出的清泉，和人类对健康与宁静的永恒追求。这里是玛丽亚温泉市，一个用泉水谱写社交史、用长廊承载文学梦的独特存在。抛开游玩攻略，走进玛丽亚温泉市的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`玛丽亚温泉市`} />
                <InfoRow label="英文名称" value={`Mariánské Lázně`} />
                <InfoRow label="正式名称" value={`Mariánské Lázně`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`玛丽亚温泉市`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事始于寂静的森林与虔诚的信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间回到<strong>1193年</strong>，附近的特普拉修道院的僧侣们最早发现了这片土地上的奇异泉眼。他们相信这是神的馈赠，用简单的木槽收集泉水，用于疗愈。然而，在之后的几个世纪里，这片富矿泉之地始终沉睡，仅仅是修道院广袤领地中不起眼的一隅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点，在<strong>十九世纪初</strong>到来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1808年</strong>，修道院的医生<strong>约瑟夫·内尔</strong>开始系统性地研究这里的泉水成分。他的科学报告，如同一声惊雷，唤醒了沉睡的资源。<strong>1812年</strong>，在修道院院长<strong>卡雷尔·卡什帕·雷滕贝格</strong>的远见卓识下，第一座简易的疗养建筑围绕着最重要的“十字泉”建立起来。一座城市，由此破土萌芽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字，便是其神圣血统的证明。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“玛丽亚”（Mariánské）源于圣母玛丽亚，体现了其深厚的天主教背景；“Lázně”在捷克语中即为“浴场、疗养地”。这个名字，完美诠释了它的双重本质：一处受神庇佑的疗愈圣地。与邻近更古老、更喧闹的<strong>卡罗维发利</strong>（Karlovy Vary）相比，玛丽亚温泉市的规划从诞生之初就带着一种刻意的宁静与规整。它的街道呈严谨的网格状铺开，建筑疏密有致，仿佛一位规划师在森林空地上，精心绘制了一座专为休养与沉思而建的乌托邦草图。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市的历史，不是由帝王征服书写的，而是由疗愈的渴望与社交的藝術所塑造。两处印记，足以勾勒其筋骨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，刻在<strong>冷泉柱廊</strong>的铸铁与玻璃之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座长达<strong>119米</strong>的优雅长廊，建成于<strong>1889年</strong>，是城市的地标与灵魂。它不仅仅是一个饮水回廊，更是一个精致的社交剧场。其内部的<strong>歌唱喷泉</strong>，自<strong>1986年</strong>重建后，每日定时奏响古典乐章。水柱随音乐起舞，这并非单纯的娱乐，而是延续了温泉疗养的传统——“饮水疗法”需在舒缓愉悦的氛围中进行。音乐引导呼吸，优雅的环境安抚神经，这是十九世纪“整体疗愈”哲学的完美体现。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“每天清晨在柱廊下散步、饮下一杯特定的泉水，随后在乐声中静坐，是每一位疗养客神圣的日常仪式。”——一位十九世纪访客的日记" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，则与一位悲情皇帝和一位传奇皇后相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1865年</strong>与<strong>1870年</strong>，痴迷于此处宁静氛围的<strong>奥地利皇后伊丽莎白</strong>，即广为人知的<strong>茜茜公主</strong>，两度秘密来此疗养。她在此试图治愈她的抑郁与对宫廷生活的深刻厌倦。而她的丈夫，<strong>奥地利皇帝弗朗茨·约瑟夫一世</strong>，也曾于<strong>1896年</strong>到访。更具戏剧性的是，法国末代皇帝<strong>拿破仑三世</strong>，在经历色当战役惨败、帝国覆灭后，于<strong>1873年</strong>选择流亡至此，并在此度过了他生命中的最后几个月。这些欧洲最显赫人物的身影，为玛丽亚温泉市贴上了“皇室避难所”与“政治舞台幕后”的隐秘标签，使其声望达到了顶峰。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "玛丽亚温泉市的泉水，仿佛对才华横溢而又心灵敏感的灵魂有着特殊的吸引力。这里没有永久居民式的巨匠，却充满了旅居过客的惊鸿一瞥。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一位，是挪威的戏剧大师：亨里克·易卜生。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1906年</strong>，<strong>77岁</strong>高龄的易卜生已是风烛残年。在经历了一次严重中风后，他被带到玛丽亚温泉市进行疗养。此时的易卜生，身体右半部分瘫痪，言语困难，这位曾经以《玩偶之家》、《人民公敌》等作品撼动世界的巨人，被困在了自己衰朽的躯壳里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这座城市给予他的，或许是生命中最后一份宁静与尊严。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他住在如今以他命名的易卜生故居（当时是旅馆），每天被推着在柱廊间缓慢行进。据当时的记录，他会在喷泉前长时间静坐，浑浊的目光凝视着跃动的水柱。我们无从得知他在想什么，是在回顾自己波澜壮阔的一生，还是在凝视生命本身如泉水般流逝的本质？玛丽亚温泉市没有治愈他的身体，却可能抚慰了他那颗永不屈服的、骄傲而孤独的灵魂。几个月后，他返回奥斯陆，并于次年逝世。他在这里的时光，如同他最后一部戏剧《当我们死人醒来时》的静默注脚，充满了悲剧性的终结感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二位，是英国的改革家国王：爱德华七世。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说易卜生代表了艺术的沉思，那么英国国王<strong>爱德华七世</strong>则带来了政治的涟漪与奢靡的社交旋风。在他还是威尔士亲王时，就是欧洲各大温泉疗养地的常客。他对玛丽亚温泉市情有独钟，在<strong>1897年</strong>首次到访后，几乎每年都会来此度过数个星期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的到来，远不止是疗养。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他住在最豪华的酒店，举办无穷无尽的宴会、舞会和牌局。他的随从、各国外交官、谋求利益的商人、乃至他那些著名的情妇（如<strong>爱丽丝·凯佩尔</strong>夫人）也随之而来。一时间，这座小城成为了非正式的英国外交沙龙和欧洲上流社会的时尚风向标。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“国王陛下在哪里，哪里就是伦敦。”——当时英国报纸的调侃" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1903年</strong>，正是在玛丽亚温泉市，爱德华七世与他的外甥、<strong>德国皇帝威廉二世</strong>举行了一次重要的非正式会晤，试图缓和日益紧张的英德关系。尽管这次会晤未能阻止世界大战的爆发，但它深刻说明了这座疗养城在当时国际政治中扮演的微妙角色——一个远离正式宫廷、便于“偶遇”与密谈的绝佳舞台。爱德华七世于<strong>1910年</strong>去世，但他所代表的那个金碧辉煌、充满礼仪与享乐主义的“美好时代”，却永远烙印在了玛丽亚温泉市的记忆之中。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于泉水的起源，科学报告之外，还有更富诗意的想象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地流传着一个美丽的传说。很久以前，一位在森林中追捕猎物的贵族，射伤了一只纯洁的小鹿。小鹿负伤奔逃，最终停在一处汩汩冒水的泥潭边，它喝下泉水，并在其中浸泡伤口。当猎人最终追上时，他惊愕地发现，小鹿的伤口已然愈合，它轻盈地跳起，消失在了林间光影之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "猎人意识到这泉水的神奇，他放弃了狩猎，在此定居，并将奇迹告知了远方的修道院。这个传说，将疗愈的恩赐归于自然的灵性（以白鹿为象征），而非人类的发现。它赋予了泉水一种仁慈、救赎的底色——即便是施害者（猎人），也因泉水的奇迹而得到了心灵的净化。今天，在城市徽章和许多装饰上，你依然能看到那只<strong>优雅的白鹿</strong>形象，它不仅是城市的象征，更是那个关于发现、忏悔与重生之传说的永恒守护者。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步在玛丽亚温泉市，你走过的每一步，都踩在历史的松软地毯上。那些色彩柔和的新古典主义立面，不是冰冷的博物馆，而是一个依然在呼吸的、关于“欧洲美好时代”的活态记忆。它让你读懂，历史并非总是宏大的叙事，也可以是一种精心经营的生活艺术，是对健康、美与宁静的集体追求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的每一杯不同成分的泉水，都曾流入肖邦、果戈里、屠格涅夫、特斯拉的杯中；柱廊下的每一张长椅，都可能聆听过易卜生的沉默或爱德华七世的笑谈。它是一座为“短暂停留”而生的城，却意外地成为了无数传奇人生中不可或缺的逗号或句点。探寻玛丽亚温泉市，便是探寻现代欧洲心灵史中，那一片被泉水浸润的、优雅而伤感的褶皱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/karlstejn-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔什特因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karlštejn Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dolni-kounice-rosa-coeli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    下
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">下库尼采罗莎·科利女子修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dolní Kounice (Rosa Coeli)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/policka-medieval-walled-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波利奇卡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Policka</p>
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
