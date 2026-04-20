import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '潘诺恩哈尔马千年修道院 Pannonhalma Archabbey｜登顶匈牙利“圣山”，在千年图书馆的寂静中触摸历史 - 最佳欧洲景点',
  description: '车驶出杰尔市，平原渐渐有了起伏，然后，你就在地平线上看到了它。那不是一座普通的山丘，而是一座头戴“皇冠”的圣山——潘诺恩哈尔马修道院。它不像那些精巧的宫殿般炫耀，而是以一种磐石般的沉稳姿态盘踞在山顶，淡黄色的石墙在阳光下泛着蜂蜜般温润的光泽，仿佛已经在这里呼吸了一千年。你把车停在山脚小镇，沿着之字形...',
}

export default function PannonhalmaArchabbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '潘诺恩哈尔马千年修道院', href: '/attractions/pannonhalma-archabbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`潘诺恩哈尔马千年修道院・Pannonhalma Archabbey・匈牙利・潘诺恩哈尔马`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车驶出杰尔市，平原渐渐有了起伏，然后，你就在地平线上看到了它。那不是一座普通的山丘，而是一座头戴“皇冠”的圣山——潘诺恩哈尔马修道院。它不像那些精巧的宫殿般炫耀，而是以一种磐石般的沉稳姿态盘踞在山顶，淡黄色的石墙在阳光下泛着蜂蜜般温润的光泽，仿佛已经在这里呼吸了一千年。你把车停在山脚小镇，沿着之字形的林荫道向上走，耳边是风吹过古老栗子树的沙沙声，还有自己逐渐加重的呼吸声。这不仅仅是一次游览，更像是一次小小的朝圣，每一步都在接近这个国家精神源头的寂静核心。
当你终于穿过那道不起眼的侧门，踏入内院时，世界瞬间安静下来。脚下是磨损得光滑如鹅卵石的青石板，空气里弥漫着一种混合了古老书卷、石蜡和潮湿石材的特殊气味，清冷而肃穆。修士们穿着黑色的长袍，静默地从回廊另一端走过，身影融入阴影里，只有轻微的脚步声在拱廊间回荡。这里不是一个冰冷的博物馆，而是一个仍然跳动的心脏，一所著名的本笃会中学就在建筑群的一翼，你能听到远处隐约传来的年轻男孩的交谈声和笑声，古老的传统与鲜活的生命在此刻产生了奇妙的共鸣。
但真正让你灵魂为之一颤的时刻，是走进那座著名的图书馆。推开厚重的木门，时间仿佛凝固了。阳光从高高的穹顶天窗倾泻而下，照亮空气中飞舞的微尘，像是金色的音符。四壁直至天花板的深色核桃木书架上，密密麻麻排列着超过35万册藏书，其中许多是中世纪的羊皮手稿。那种寂静是有重量的，压得你不敢大声呼吸。你会不自觉地想象，几百年来，有多少修士曾在这同样的光线里，俯身于这些书页，用鹅毛笔尖蘸着墨水，一笔一划地抄写、思考、祈祷。这里保存的不是知识，而是时间本身。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车驶出杰尔市，平原渐渐有了起伏，然后，你就在地平线上看到了它。那不是一座普通的山丘，而是一座头戴“皇冠”的圣山——潘诺恩哈尔马修道院。它不像那些精巧的宫殿般炫耀，而是以一种磐石般的沉稳姿态盘踞在山顶，淡黄色的石墙在阳光下泛着蜂蜜般温润的光泽，仿佛已经在这里呼吸了一千年。你把车停在山脚小镇，沿着之字形的林荫道向上走，耳边是风吹过古老栗子树的沙沙声，还有自己逐渐加重的呼吸声。这不仅仅是一次游览，更像是一次小小的朝圣，每一步都在接近这个国家精神源头的寂静核心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于穿过那道不起眼的侧门，踏入内院时，世界瞬间安静下来。脚下是磨损得光滑如鹅卵石的青石板，空气里弥漫着一种混合了古老书卷、石蜡和潮湿石材的特殊气味，清冷而肃穆。修士们穿着黑色的长袍，静默地从回廊另一端走过，身影融入阴影里，只有轻微的脚步声在拱廊间回荡。这里不是一个冰冷的博物馆，而是一个仍然跳动的心脏，一所著名的本笃会中学就在建筑群的一翼，你能听到远处隐约传来的年轻男孩的交谈声和笑声，古老的传统与鲜活的生命在此刻产生了奇妙的共鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但真正让你灵魂为之一颤的时刻，是走进那座著名的图书馆。推开厚重的木门，时间仿佛凝固了。阳光从高高的穹顶天窗倾泻而下，照亮空气中飞舞的微尘，像是金色的音符。四壁直至天花板的深色核桃木书架上，密密麻麻排列着超过35万册藏书，其中许多是中世纪的羊皮手稿。那种寂静是有重量的，压得你不敢大声呼吸。你会不自觉地想象，几百年来，有多少修士曾在这同样的光线里，俯身于这些书页，用鹅毛笔尖蘸着墨水，一笔一划地抄写、思考、祈祷。这里保存的不是知识，而是时间本身。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`潘诺恩哈尔马千年修道院`} />
                <InfoRow label="英文名称" value={`Pannonhalma Archabbey`} />
                <InfoRow label="正式名称" value={`Pannonhalma Archabbey and its Natural Environment`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`潘诺恩哈尔马`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`匈牙利最古老的本笃会修道院，自公元996年建立以来，一直是匈牙利的精神、文化和教育摇篮，见证了匈牙利千年国运的每一次转折。`} />
                <InfoRow label="建筑特色" value={`一座依山而建、层层叠叠的庞大建筑群，仿佛从“圣山”的岩石中自然生长出来，将厚重的罗曼式地基、华丽的哥特式拱顶、巴洛克式的装饰与19世纪的新古典主义立面奇妙地融合于一体。`} />
                <InfoRow label="建筑风格" value={`以罗曼式风格为基石，历经哥特式重建与扩建，并在18世纪披上了巴洛克的外衣，最终在19世纪以严谨的新古典主义立面定型，是一部活生生的匈牙利建筑风格编年史。`} />
                <InfoRow label="文化价值" value={`作为联合国教科文组织世界遗产，其核心价值不仅在于建筑，更在于它延续千年的本笃会传统、无与伦比的图书馆馆藏以及作为教育中心对匈牙利文化不可磨灭的塑造力。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院区域及博物馆开放时间因季节而异，通常为4月至10月：9:00-17:00；11月至3月：10:00-16:00。周一普遍关闭（节假日除外）。图书馆和教堂内部参观必须参加导览团，英语导览团每日场次有限，夏季较多，冬季可能仅下午一场，具体时间需当日于游客中心确认。修道院教堂在举行宗教仪式期间不对外开放游览。`} />
              <InfoRow label="门票价格" value={`基础门票（含博物馆、回廊、部分教堂区域）约为3500匈牙利福林（约9欧元）。包含英语导览的深度游门票（含图书馆、圣坛等限制区域）约为5500福林（约14欧元）。学生、老人及团体享有折扣优惠。6岁以下儿童免费。门票建议在官方线上商店提前购买，尤其在夏季旺季可避免现场排队。`} />
              <InfoRow label="地址" value={`Vár 1, Pannonhalma, 9090, Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯李斯特·费伦茨国际机场出发，最便捷的方式是租车自驾，沿M1高速公路向西北方向行驶约100公里，车程1小时15分钟左右，修道院有清晰路标。若乘坐公共交通，先从机场乘坐巴士或出租车到布达佩斯火车西站，乘坐前往杰尔市的火车，每小时约1-2班，车程1.5小时。抵达杰尔后，在火车站前的公交站换乘前往Pannonhalma的本地巴士（约30分钟车程，班次有限，需提前查好时刻表），或乘坐出租车（约20分钟）直达修道院山脚下。务必预留充足的衔接时间，乡村巴士班次稀疏。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一千多年前讲起。公元996年，匈牙利人的第一位国王，圣什特万一世，还只是个信仰异教的王子。他的父亲盖萨大公为了巩固统治并让匈牙利融入基督教欧洲，做出了一个关键决定：邀请本笃会的修士们来到这片土地。他赐予了潘诺恩哈尔马这座山丘，修士们在此敲下了第一块基石。最初的建设是艰难的，他们用当地的石材修建了简单的罗曼式小教堂和住所，但这里迅速成为了向整个潘诺尼亚盆地传播基督教信仰、引进拉丁文字和西欧文化的灯塔。修道院不仅祈祷，它开垦土地、引进葡萄种植和酿酒技术，实实在在地塑造了早期匈牙利社会的面貌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，中世纪的荣耀总是伴随着劫难。1241年，蒙古铁骑如飓风般席卷匈牙利，所到之处尽成焦土。潘诺恩哈尔马修道院也未能幸免，被付之一炬。但就像凤凰涅槃，灾难之后是更辉煌的重生。接下来的一个世纪，修道院在废墟上以当时最盛行的哥特式风格重建，那座令人屏息的圣坛和高耸的拱顶，就诞生于这个时期。它挺过了奥斯曼帝国的威胁，在动荡的岁月里始终是匈牙利文化和民族认同的避难所。文艺复兴的春风吹到这里时，修道院迎来了另一位关键人物——马加什国王。这位酷爱艺术的统治者大力资助修道院，其著名的科尔文纳图书馆的部分珍贵藏书也曾收藏于此，为这里的学术研究注入了新的活力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到18世纪，巴洛克艺术的浪潮席卷了匈牙利。修道院也披上了这层华丽的新装，内部装饰变得繁复而充满戏剧性，金色的灰泥装饰、栩栩如生的壁画和精美的祭坛，让教堂内部焕然一新。但修道院的生命力不止于艺术。在玛丽亚·特蕾莎女皇和约瑟夫二世皇帝的改革时代，它经历了一次深刻的现代化转型。尽管约瑟夫二世解散了许多修道院，但潘诺恩哈尔马因其卓越的教育功能得以保留，并转型为一所顶尖的学校，这一角色一直延续至今。19世纪，建筑的外立面被改建为庄重的新古典主义风格，就是我们今天看到的样子，它洗去了巴洛克的喧嚣，回归一种古典的宁静与力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪的风云变幻，纳粹占领和之后的共产主义政权，都对这座宗教机构构成了巨大挑战。学校曾被国有化，修士的活动受到严格限制。但坚韧的本笃会传统就像深埋在山岩下的根须，从未真正死去。1996年，在修道院建立整整一千周年之际，它被列入联合国教科文组织世界遗产名录。这不仅是对其古老建筑的认可，更是对其跨越千年、绵延不绝的文化与精神使命的最高嘉奖。今天，当你漫步其中，你能同时触摸到公元10世纪的石墙、15世纪的彩色玻璃、18世纪的壁画和21世纪中学生的活力，它是一部从未合上的、依然在书写下一页的活历史。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`最佳的深度游览应该安排一个完整的下午。建议在下午一点半左右抵达山脚下的游客中心，此时上午的旅行团大多已离开，而参加下午英语导览团的时间也正好。整体游览需要预留至少2.5到3小时。节奏应该是“先外后内，先静后动”：先在山坡和外围感受整体气势与自然环境，再进入建筑内部，从宏大的教堂空间逐步深入到需要导览的、极静谧的图书馆核心区。这样的安排能让你在视觉和心灵上都有一个循序渐进的适应过程，最终在图书馆达到体验的高潮。导览结束后，别急着离开，可以在回廊或花园里坐一会儿，让那种历史的厚重感慢慢沉淀。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要提前在官网核查英语导览的具体时间并强烈建议预订，现场很可能因为人数已满而无法参加，错过图书馆将是巨大遗憾。参观教堂和图书馆内部时，着装需得体，避免无袖上衣和过短的裤裙。整个修道院区域非常安静，请将手机调至静音，交谈尽量低声，以尊重在此修行和学习的修士与学生。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在山腰停车场，先别急着上山，回头走到那片正对修道院的葡萄园小径，从那里获得第一个完整的、带有田园诗般前景的仰视视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的石拱校门，沿着两侧栽满菩提树的主甬道向上漫步，感受脚下石板路的凹凸与岁月痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入修道院主体建筑后，先别跟人群走，独自在空旷的回廊里停留片刻，只听水井边的滴水声和自己的脚步声在拱顶下回荡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随英语导览团，在导游用钥匙打开图书馆大门的那一刹那，准备好迎接扑面而来的、几乎令人窒息的壮观与肃穆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在教堂主殿，一定要躺坐在长椅上（如果没仪式），抬头久久凝视那复杂的哥特式网状拱顶，看光线如何从高侧窗移动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览结束后，寻着指示牌登上钟楼或教堂的塔楼，在呼啸的风中俯瞰一望无际的匈牙利大平原，理解“圣山”之名的地理意义。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`临走前，去修道院自家的酒窖商店转一转，买一瓶由修士们传承千年技艺酿造的“圣山”葡萄酒，将味道的记忆带回家。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`葡萄园仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约两小时，从修道院南侧山坡的葡萄园小径往回拍，温暖的斜阳会给淡黄色的建筑染上金边，前景的葡萄藤垄沟能形成绝佳的引导线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`回廊拱窗框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光斜射入回廊，找一个拱窗作为画框，拍摄对面被阳光照亮、爬满藤蔓的石墙和另一扇窗，营造深邃的层次感与光影戏剧。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`图书馆螺旋楼梯俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`参加导览时，在征得允许后，快速登上图书馆二层的栏杆边，向下俯拍那座精美的巴洛克式螺旋楼梯，它能完美展现建筑的几何美感与纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`教堂内部长曝光`}</h4>
                  <p className="text-sm text-gray-700">{`使用三脚架（若允许），在游客稀少的时刻，于中殿后方进行长时间曝光，捕捉从彩色玻璃窗射入的静谧光束，以及空无一人的长椅所形成的韵律感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`塔楼俯瞰平原`}</h4>
                  <p className="text-sm text-gray-700">{`在塔楼观景台，使用广角镜头，将 foreground 的石雕滴水嘴兽与 background 一望无际的绿色平原一同纳入画面，诉说“守卫与眺望”的故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`图书馆内部严格禁止使用闪光灯和三脚架（除非获得特殊许可），高感光度的相机和大光圈镜头在这里是必备的。拍摄修士、学生或正在祈祷的信徒属于不礼貌行为，务必先取得明确同意。无人机飞行在修道院上空通常被禁止，需提前向管理方申请特殊许可。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接入住修道院翻新后的古老客房（Guesthouse of the Archabbey），体验夜间万籁俱寂时，独自漫步在千年回廊下的超凡感受，清晨在修士的晨祷钟声中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`小镇风情`}</h4>
                  <p className="text-sm text-green-800">{`潘诺恩哈尔马镇上由家庭经营的精品民宿，房间可能拥有直面“圣山”的小阳台，主人会为你准备丰盛的本地早餐，并分享小镇的趣闻轶事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便捷都市`}</h4>
                  <p className="text-sm text-yellow-800">{`住在邻近的杰尔市中心，选择一家设计酒店或河边历史建筑改造的酒店，晚上可以享受热闹的咖啡馆和餐厅，次日再轻松乘车前来修道院。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`田园奢享`}</h4>
                  <p className="text-sm text-purple-800">{`驱车15分钟，入住大平原上一座改造自贵族庄园的精品酒店，在无边泳池里遥望山顶的修道院剪影，享受极致的宁静与奢华对比。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`修道院内部的客房数量极少，必须提前数月预订，且有时仅对静修者或学术访问开放，需仔细查看其官网政策。小镇上的住宿在夏季和周末也很紧俏。如果选择住在杰尔，虽然选择多、餐饮丰富，但需要每天往返通勤，请务必提前查好公共交通的末班车时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开潘诺恩哈尔马时，我的背包里除了一瓶修士酿的酒，似乎还装走了一些别的东西——一种由巨大宁静孕育出的内心充实感。在这个一切都在加速、信息爆炸的时代，这个地方的存在本身就像一个坚定的反义词。它不急于向你展示什么，只是沉默地屹立在那里，用一千年积累下的石头、书籍和寂静，告诉你什么是“持久”，什么是“深度”。它让你相信，有些价值，比如对知识的虔诚、对内心的观照、对传统的持守，是任何时代的喧嚣都无法冲刷掉的基石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，这就是深度旅行最珍贵的收获吧。它不是打卡，而是寻找一个能让时间慢下来、让心灵沉下去的锚点。潘诺恩哈尔马就是这样一个锚点。每一位真正渴望理解中欧精神脉络，渴望在旅途中获得片刻真正安宁的旅人，都应该来这里，爬一次这座“圣山”。不仅仅是用眼睛看一座伟大的建筑，更是用脚步去丈量一段活着的历史，在千年图书馆的尘埃与光影里，与自己内心那个渴望永恒的部分，进行一次安静的对话。你会发现，山巅之上，风景不仅是平原，还有穿越时光的清晰回响。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gyor" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杰尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Győr</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sopron" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    肖
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">肖普朗老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sopron</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/early-christian-necropolis-pecs" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩奇早期基督教陵墓</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Early Christian Necropolis of Pécs</p>
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
