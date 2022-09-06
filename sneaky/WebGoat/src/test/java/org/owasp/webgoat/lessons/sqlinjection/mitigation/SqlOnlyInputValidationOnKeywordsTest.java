package org.owasp.webgoat.lessons.sqlinjection.mitigation;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.owasp.webgoat.lessons.sqlinjection.SqlLessonTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class SqlOnlyInputValidationOnKeywordsTest extends SqlLessonTest {

    @Test
    public void solve() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/SqlOnlyInputValidationOnKeywords/attack")
                .param("userid_sql_only_input_validation_on_keywords", "Smith';SESELECTLECT/**/*/**/FRFROMOM/**/user_system_data;--"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.lessonCompleted", is(true)))
                .andExpect(jsonPath("$.feedback", containsString("passW0rD")));
    }

    @Test
    public void containsForbiddenSqlKeyword() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/SqlOnlyInputValidationOnKeywords/attack")
                .param("userid_sql_only_input_validation_on_keywords", "Smith';SELECT/**/*/**/from/**/user_system_data;--"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.lessonCompleted", is(false)))
                .andExpect(jsonPath("$.output", containsString("unexpected token: *<br> Your query was: SELECT * FROM user_data WHERE last_name = 'SMITH';\\\\\\/**\\\\\\/*\\\\\\/**\\\\\\/\\\\\\/**\\\\\\/USER_SYSTEM_DATA;--'")));
    }
}
