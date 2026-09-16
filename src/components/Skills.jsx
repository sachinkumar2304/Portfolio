import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SqlServerIcon,
  SqlQueryIcon,
  PythonIcon,
  PowerBiIcon,
  FastApiIcon,
  SupabaseIcon,
  N8nIcon,
  ReactIcon,
  HuggingFaceIcon,
  TreeSitterIcon,
  GitIcon,
  JavaIcon,
  PostgresqlIcon,
  AmazonS3Icon,
  SnowflakeIcon,
  DbtIcon,
  ExcelIcon,
  PandasIcon,
  DatabricksIcon
} from './Icons';
import { portfolioData } from '../data/portfolioData';

// Official Brand Icon mapping
const iconMap = {
  SqlServer: SqlServerIcon,
  SqlQuery: SqlQueryIcon,
  Python: PythonIcon,
  PowerBi: PowerBiIcon,
  FastApi: FastApiIcon,
  Supabase: SupabaseIcon,
  N8n: N8nIcon,
  React: ReactIcon,
  HuggingFace: HuggingFaceIcon,
  TreeSitter: TreeSitterIcon,
  Git: GitIcon,
  Java: JavaIcon,
  Postgresql: PostgresqlIcon,
  AmazonS3: AmazonS3Icon,
  Snowflake: SnowflakeIcon,
  Dbt: DbtIcon,
  Excel: ExcelIcon,
  Pandas: PandasIcon,
  Databricks: DatabricksIcon,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const skills = portfolioData.skills;

  const categories = ['All', 'Databases & SQL', 'AI & NLP', 'Backend & Tools'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================================================
            SECTION HEADER
            Ultra-clean, pure white, spacious editorial typography (ZAID SAYYED reference style)
            Re-reveals every time on scroll with 1.5s smooth animation
        ================================================== */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 35, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#FFFFFF] uppercase tracking-[0.16em] sm:tracking-[0.22em] leading-tight"
          >
            Technical Stack & Core Competencies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-xs sm:text-sm font-mono tracking-[0.2em] text-[#9CA3AF] uppercase max-w-2xl leading-relaxed"
          >
            Relational Engine Internals • Analytical SQL • Cloud Platforms • Backend Pipelines
          </motion.p>

          {/* Interactive Category Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap justify-center gap-2 p-1.5 bg-[#111111] rounded-2xl border border-white/[0.06] shadow-neu-inset"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#181818] text-white shadow-[0_2px_10px_rgba(0,0,0,0.6)] border border-white/25 font-bold'
                    : 'text-[#A3A3A3] hover:text-[#FFFFFF]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* ==================================================
            SKILLS GRID - Clean, minimal cards with authentic brand icons
            Re-reveals every time on scroll with 1.5s staggered animation (once: false)
        ================================================== */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || SqlQueryIcon;
            return (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.5, delay: (index % 4) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="neu-card neu-card-hover p-5 rounded-[22px] flex flex-col justify-between relative group overflow-hidden cursor-default transition-all border border-white/[0.06]"
              >
                {/* Subtle top edge accent for highlighted skills */}
                {skill.highlight && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-80"
                    style={{ backgroundColor: skill.accent || '#E8395F' }}
                  />
                )}

                <div>
                  {/* Top Bar: Authentic Brand Logo in Original Color + Level Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0D0D0D] shadow-neu-inset flex items-center justify-center border border-white/[0.05] group-hover:border-white/20 transition-colors">
                      <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>

                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#0C0C0C] text-[#E5E7EB] border border-white/[0.08] shadow-neu-inset-sm font-semibold tracking-wide">
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Title & Category */}
                  <h3 className="text-base font-heading font-bold text-[#FFFFFF] group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] font-mono text-[#9CA3AF] mt-0.5 block">
                    {skill.category}
                  </span>

                  {/* Concise Description (Half detailing, crisp and minimal) */}
                  <p className="text-xs text-[#D1D5DB] mt-2.5 leading-relaxed font-sans font-normal">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
