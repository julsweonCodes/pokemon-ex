### **Requirements**
- **System Functionality**:  
  - Develop a system to manage Pokémon battles, tracking their status (capabilities, health, battles won/lost).
  - Allow dynamic definition of new Pokémon.
  - Use Java Reflection for handling dynamic objects.
- **UML Class (Model) Diagram (~50% of grade)**:  
  - 3 to 10 classes with attributes, operations, and relationships.
  - Proper cardinalities and visibility notation.
  - Omit simple getters and setters.
- **UML Sequence Diagrams (2 diagrams, each ~25% of grade)**:  
  - One diagram for a battle where Pokémon X attacks, and Pokémon Y does not defend.
  - One diagram for a battle where Pokémon Y attacks, and Pokémon X defends.
  - Include lifeline boxes, messages, object creation, and control structures.
- **Battle Mechanics**:  
  - Turn-based system where Pokémon attack or defend based on their health percentage.
  - Randomized selection of attacks and defenses.
  - Implement attack damage calculations with defensive reductions.
  - Maintain consistency using Java’s `Random` with seed values.
- **Evaluation Criteria**:  
  - Object-oriented design principles.
  - Consistency between design artifacts and implementation.
  - Passes a set of provided and hidden test cases.

### **Submission Details**
- **Submission via Canvas**:  
  - **class_diagram.pdf** (UML Class Diagram)
  - **sequence_diagram.pdf** (UML Sequence Diagrams)
  - Multiple files allowed for readability (e.g., `class_diagram1.pdf`, `sequence_diagram2.pdf`).
- **Submission Guidelines**:  
  - Must be completed in an approved group.
  - Notify instructors via Canvas or Ed Discussion before the due date if technical issues arise.
  - Late submissions likely won’t be accepted.
  - Unlimited submissions allowed before the deadline.
- **Testing & Iteration**:  
  - Expected to iterate on designs and implementations.
  - System must handle dynamically introduced Pokémon after submission.
  - Office hours available for clarifications.
 
### **Attack/Defense Rate Logic**  
A Pokémon decides whether to **attack or defend** based on its **current HP ratio** (current HP / max HP):  

- **HP ≥ 70%** → **80% chance to attack**, 20% chance to defend.  
- **30% ≤ HP < 70%** → **50% chance to attack**, 50% chance to defend.  
- **HP < 30%** → **30% chance to attack**, 70% chance to defend.  

✅ **Attack Selection**: If attacking, the Pokémon picks an attack **randomly** from its available skills (uniform probability).  
✅ **Defense Selection**: If defending, the Pokémon picks a defensive move **randomly** from its available skills (uniform probability).  

🔹 **Damage Calculation**:  
- If the Pokémon defended last turn: **Final damage = Attack Damage - Defense Reduction** (can be reduced to 0).  
- If the Pokémon did NOT defend: **Full attack damage applies**.  
- All fractional damage values are **rounded up** (ceiling function).  

---

### **Seed Mechanism for Randomness**  
Java’s `Random` class is used to **control battle randomness** consistently using a seed value.  

🔹 **Seed Rules**:  
- The `setseed,<Value>` command assigns a seed for randomness.  
  - Pokémon 1 gets `<Value>`, Pokémon 2 gets `<Value + 1>`.  
- The `removeseed()` command **removes the effect** of the previously set seed.  
- The system must support **multiple setseed and removeseed commands before a battle**.  
- If no seed is set, randomness is uncontrolled.  
- The `stop` command **gracefully terminates** the simulation.  

---
